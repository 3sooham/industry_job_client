import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  // 부모한테 받아오는 전체 페이지의 수
  @Input() pageSize: number | undefined;
  // 부모로 보내는 현재 페이지 번호
  @Output() pageEmitter = new EventEmitter<number>();

  pages: Array<number> = [];
  selectedPage = 1;

  // 이거 스트럭쳐매니저는 ngafterviewinit으로 했는데 이거로 해도 상관없어보이기는함
  // 일단 한번해봐야할것 같음
  ngOnInit(): void {
    if(this.pageSize) {
      for (let i = 0; i < this.pageSize; i++){
        this.pages.push(i + 1);
      }
    }
  } 

  onClickPage(index: number) {
    this.selectedPage = index;
    this.pageEmitter.emit(index);
  }

  // paginator에서 뒤의 페이지 보여주는 버튼 누르면 동작
  onClickPrev() {
    console.log("asdasds")
    // 이거 1이면 그냥 return 하지말고 버튼 비활성화도 고려해봐야함
    if (this.selectedPage == 1){
      return;
    }

    // 부모 페이지로 currnentPage 넘겨줌
    this.pageEmitter.emit(this.selectedPage++);
  }

  // // 10개씩 이동하는거
  // onClickPrev10 () {
  //   if (this.selectedPage == 1) {
  //     return
  //   }
  //   else if(this.selectedPage - 10 < 1) {
  //     this.pageEmitter.emit(this.selectedPage);
  //   }
  //   else {
  //     this.pageEmitter.emit(this.selectedPage -= 10);
  //   }
  // }

  onClickNext() {
    if (this.selectedPage == this.pageSize) {
      return
    }

    this.pageEmitter.emit(this.selectedPage++)
  }

  // onClickNext10() {
  //   if (this.currentPage == 1) {
  //     return
  //   }
  //   else if(this.currentPage + 10 > this.currentPage) {
  //     this.pageEmitter.emit(this.currentPage);
  //   }
  //   else {
  //     this.pageEmitter.emit(this.currentPage += 10);
  //   }
  // }
}