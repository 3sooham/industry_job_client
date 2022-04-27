import { Component, OnInit } from '@angular/core';
import { IndustryJob } from '../_models/industry-jobs';
import { IndustryJobService } from '../_services/industry-job.service';

@Component({
  selector: 'app-industry-jobs',
  templateUrl: './industry-jobs.component.html',
  styleUrls: ['./industry-jobs.component.sass']
})
export class IndustryJobsComponent implements OnInit {
  industryJobs: IndustryJob[] | undefined;
  currentPage: IndustryJob[] | undefined;
  // displayedColumns: string[];
  errorMessage: any
  totalPageSize: number;
  pageSize = 10;
  clicks = 0
  

  // 페이지네이터로 전체 페이지 크기 보내준후에
  // 페이지네이터에서 현재 페이지를 받은다음에
  // 인더잡중에서 [현재 페이지 * 60:현재 페이지 * 60 + 60]만큼만 보여주면됨 -> 이거는 currentPage에 담아서 보여줄거임.

  constructor(
    private industryJobService: IndustryJobService
  ) { }

  ngOnInit() {
    this.listJobs()
  }

  listJobs() {
    this.industryJobService.getIndustryJobs()
      .subscribe({
        next: (v) => {
          this.industryJobs = v,
          this.industryJobs = this.industryJobs.slice(0, 1),
          this.pageSize = this.industryJobs.length
        },
        error: (e) => this.errorMessage = e
      });
  }

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // sort의 compareFunction 리턴이 0보다 작은 경우 ab순서임. 즉 a가 b보다 앞인거임
  // compareFunction의 리턴이 0보다 크면 ba순서임
  // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/localecompare
  // localeCompare는 a.localeCompare(b)에서 a가 b보다 앞서면 -1
  // 아니면 ba순이면 1 리턴임
  onClickSort(column: keyof IndustryJob): void {
    if (this.clicks % 2 === 0) {
      this.clicks++;
      this.industryJobs?.sort(
        (a, b) => {
          if (a[column] > b[column]) {
            return 1
          }
          if (a[column] < b[column]) {
            return -1
          }
          else {
            return 0
          }
        }
      )
    }
    else {
      this.clicks++;
      this.industryJobs?.sort(
        (a, b) => {
          if (a[column] > b[column]) {
            return -1
          }
          if (a[column] < b[column]) {
            return 1
          }
          else {
            return 0
          }
        }
      )
    }
  }

  onClickSortByPosition() {
    this.industryJobs?.sort(
      (a, b) => (a.installer_name.localeCompare(b.installer_name) < 0 ? 1 : -1)
    )
  }

}
