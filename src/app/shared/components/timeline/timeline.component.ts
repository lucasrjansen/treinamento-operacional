import { Component, OnInit, Input, OnDestroy, } from '@angular/core';
import { TimelineItem } from 'src/app/shared/_models';
import { DateHelper } from 'src/app/shared/_helpers';

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimeLineComponent implements OnInit, OnDestroy {

    @Input() items: TimelineItem[];
    _previous: TimelineItem = null;
    template: string[];

    ngOnInit() {

        this.loadTemplate(this.buildTimeline());
    }

    loadTemplate(template: string) {
        document.querySelector('#timeline-list').innerHTML = template;
    }

    buildTimeline(): string {

        let template = '';
        if (this.items != null) {
            this.sortItems();

            this.items.forEach(item => {

                if (this.showPeriod(item)) {
                    template += this.buildHtmlPeriod(item.date);
                }

                template += this.buildHtmlItem(item);
            })
        }

        return template;
    }

    private buildHtmlItem(item: TimelineItem) {

        return `
        <li class="timeline-item">
            <div class="timeline-info">
                <span> ${DateHelper.dataPorExtenso(item.date)}</span>
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3 class="timeline-title">${item.title}</h3>
                <p>${item.description || ''}</p>
            </div>
        </li>`;
    }

    private buildHtmlPeriod(date: Date) {

        return `
        <li class="timeline-item period">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
            <h2 class="timeline-title">${DateHelper.mesAnoPorExtenso(date)}</h2>
            </div>
        </li>`;
    }

    private sortItems() {

        if (this.items != null) {
            this.items.sort((a, b) => {
                if (a.date < b.date) {
                    return -1;
                } else if (a.date > b.date) {
                    return 1;
                }
                return 0;
            })
        }
    }

    showPeriod(currentItem: TimelineItem): boolean {

        if (this._previous == null) {
            this.setPrevious(currentItem)
            return true;
        }

        let ret = this._previous.date.getMonth() != currentItem.date.getMonth() ? true : false;
        this.setPrevious(currentItem);

        return ret;
    }

    setPrevious(previous: TimelineItem) {
        this._previous = previous;
    }

    ngOnDestroy(): void {
        this.items = null;
    }
}
