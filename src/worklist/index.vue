<template>
    <div id="devWrap">
      <h1>프로젝트명</h1>
      <ul id="gnb">
        <li class="on">
          <router-link to="/">작업목록</router-link>
        </li>
        <li><a href="index2.html">가이드</a></li>
        <!-- <li><a href="index3.html">관리자</a></li> -->
        <li><a href="index4.html">작업규칙</a></li>
        <!-- <li><a href="index5.html">개발기</a></li>
        <li><a href="index6.html">운영기</a></li> -->
      </ul>
      <h2>작업목록</h2>
      <h3 id="M0">작업공정률</h3>
      <table summary="" cellspacing="0" border="0" class="htmlProcess tbl-type1">
        <caption>작업공정률</caption>
        <colgroup><col width="60"/><col span="4" width="12%"/><col width="*"/></colgroup>
        <thead>
        <tr>
          <th>구분</th>
          <th>파일수</th>
          <th>완료</th>
          <th>대기</th>
          <th>작업률(%)</th>
          <th>기타</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td class="total_files">{{tableItems.length}}</td>
          <td class="final_files">{{final_files}}</td>
          <td class="waiting_files">{{waiting_files}}</td>
          <td class="html_percent">{{html_percent}}%</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h3 id="M1">개발목록</h3>
      <table summary="퍼블리싱 작업목록을 파일명과 완료일자로 보여주는 표" class="tbl-type1 sorttable">
        <caption>작업목록</caption>
        <colgroup>
          <col width="60"/>
          <col span="4" width="12%"/>
          <col span="4" width="8%"/>
          <col width="*"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col"><span>번호</span></th>
            <th scope="col"><span>분류</span></th>
            <th scope="col"><span>1Depth</span></th>
            <th scope="col"><span>2Depth</span></th>
            <th scope="col"><span>3Depth</span></th>
            <th scope="col"><span>파일명</span></th>
            <th scope="col">작업자</th>
            <th scope="col">작업일</th>
            <th scope="col">비고</th>
            <th scope="col">수정일</th>
            <th scope="col">수정내역</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableItems" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.kind}}</td>
            <td>{{item.dep1}}</td>
            <td>{{item.dep2}}</td>
            <td>{{item.dep3}}</td>
            <td><router-link :to="item.file" target="_blank" :title="item.file">{{item.file}}</router-link></td>
            <td>{{item.worker}}</td>
            <td>{{item.workDate}}</td>
            <td>{{item.comment}}</td>
            <td>{{item.modDate}}</td>
            <td>
              <template v-if="item.history.length > 0">
                <a class="link" @click="openModHistoryPop(item.history)">수정내역</a>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- modal -->
      <div class="modal-overlay" v-if="modPop"></div>
      <div class="wrap-layer-on" v-if="modPop">
        <div class="layer-type1 layer-type1-w1">
          <div class="layer-header">
            <h1>수정내역</h1>
            <button class="btn-close" @click="modPop=false">타이틀 컨텐츠 닫기<span></span></button>
          </div>
          <div class="layer-content">
            <table summary="파일수정내역" class="tbl-type1">
              <colgroup><col width="100"><col width="*"></colgroup>
              <thead>
                <tr>
                  <th class="header">최종수정일</th>
                  <th class="header">수정내용</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in modHistory" :key="index">
                  <td>{{item.date}}</td>
                  <td>{{item.cont}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- modal // -->
    </div>
</template>

<script>
/* {
  kind: 'Membership',
  dep1: '회원가입',
  dep2: '회원선택, 약관동의',
  dep3: '',
  file: 'index',
  worker: '김인혜',
  workDate: '2014-11-27',
  comment: '',
  modDate: '2014-11-17',
  history: [
    {
      date: '2014-11-17',
      cont: '가입안내, 회원종류선택, 약관동의 한페이지로 UI구성'
    }
  ]
}, */
export default {
  name: 'worklist',
  data () {
    return {
      modPop: false,
      modHistory: [],
      tableItems: [
        {
          kind: '',
          dep1: '',
          dep2: '',
          dep3: '',
          file: 'main',
          worker: '김인혜',
          workDate: '2014-11-27',
          comment: '',
          modDate: '',
          history: []
        },
        {
          kind: '',
          dep1: '',
          dep2: '',
          dep3: '',
          file: 'main',
          worker: '김인혜',
          workDate: '',
          comment: '',
          modDate: '',
          history: []
        }
      ]
    }
  },
  computed: {
    final_files () {
      return this.tableItems.filter((item) => item.workDate !== '').length
    },
    waiting_files () {
      return this.tableItems.length - this.final_files
    },
    html_percent () {
      return (this.final_files / this.tableItems.length) * 100
    }
  },
  methods: {
    openModHistoryPop (history) {
      this.modHistory = history
      this.modPop = true
    }
  }
}
</script>
<style lang="scss">
/* ----------------------------------------------
초기화
---------------------------------------------- */
#devWrap{
  font-family:'나눔고딕',NanumGothic,'Nanum Gothic';font-size:12px;line-height:1.5;color:#222;
  width:98%; margin:0 auto;padding:20px 0 50px;
  pre {font-family:'나눔고딕',NanumGothic,'Nanum Gothic';font-size:12px;line-height:1.5;color:#222;}
  div, p, ul, ol, li, dl, dt, dd, table, th, td, h1, h2, h3, h4, h5, h6, address, blockquote, pre {margin:0;padding:0;}
  h1 {text-align:center;font-size:36px;margin:0 0 30px 0;color:#333;}
  h2 {display:none;}
  h3 {margin:25px 0 10px;padding:8px 0 8px 10px;background:#375f91;font-size:14px;line-height:1;color:#fff;}
  h4 {margin:25px 0 10px;padding:0 0 6px 10px;font-size:14px;line-height:1;border-bottom:1px solid #ddd;}
  h5 {margin:20px 0 0;padding:0 0 6px 10px;font-size:12px;line-height:1;}
  table {border-spacing:0;border-collapse:collapse;}
  img {border:0;}
  caption {overflow:hidden;visibility:hidden;font-size:0;line-height:0;height:0;}
  pre {white-space:pre-wrap;}
  ul {margin:0 0 0 15px;}
  dt {font-weight:bold;}
  button {padding:0;margin:0;border:0;cursor:pointer;}

  /* dialog */
  .modal-overlay {position:fixed;left:0;top:0;width:100%;height:100%;min-width:100%;min-height:100%;background:#000;opacity:0.4;filter:alpha(opacity=30);z-index:995;}
  * html .modal-overlay {position:absolute;left:0;top:0;}
  .wrap-layer-on {width:100%;height:100%;}
  .layer-type1 {position:absolute;left:50%;top:30%;padding:22px;border:3px solid #333;background:#fff;z-index:997;}
  .layer-type1 .layer-header {position:relative;height:30px;margin:0 0 10px;border-bottom:1px solid #d5d5d5;z-index:998;}
  .layer-type1 .layer-header h1 {padding:0;font-size:14px;color:#000;font-weight:bold;text-align:left;}
  .layer-type1 .layer-header .btn-close {position:absolute;right:0;top:0;width:21px;height:21px;margin:0;padding:0;overflow:hidden;vertical-align:top;z-index:999;}
  .layer-type1 .layer-header .btn-close span {position:absolute;left:0;top:0;width:21px;height:21px;background:#fff url(img/btn_close.gif) no-repeat 50% 50%;}
  // .layer-type1 .layer-header .btn-close:focus {}
  .layer-type1-w1 {width:500px !important;transform: translateX(-50%);}

  /* ----------------------------------------------
  레이아웃
  ---------------------------------------------- */

  ul#gnb {*zoom:1;margin:0;border-bottom:1px solid #e83427;margin-bottom:30px;}
  #gnb:after {content:'';display:block;clear:both;}
  #gnb li {float:left;list-style:none;margin-right:2px;}
  #gnb li a {display:block;padding:10px 25px;border:1px solid #ccc;border-bottom:none;font-size:14px;font-weight:bold;color:#333;text-decoration:none;}
  #gnb li.on a {background:#e83427;padding:11px 26px 10px;border:none;color:#fff;}

  .btn-top {position:fixed;right:0;bottom:20%;background:#666}
  .btn-top a {display:block;width:60px;padding:5px 0;text-align:center;color:#fff;text-decoration:none;}

  /* ----------------------------------------------
  가이드컨텐츠
  ---------------------------------------------- */
  .tbl-type1 {margin:7px 0 30px;border-top: 2px solid #333;width:100%;}
  .tbl-type1 th {background-color:#dddddd;font-weight:bold;}
  .tbl-type1 th, .tbl-type1 td {border: 1px solid #aaaaaa;padding:6px 10px;vertical-align: middle;}
  .tbl-type1 thead th {padding:6px 5px;}
  .tbl-type1 thead th.header span {display:block;padding-right:20px;/* background:url(img/bg.gif) no-repeat 100% 50%; */cursor:pointer;}
  .tbl-type1 thead th.header.headerSortDown span {background:url(img/asc.gif) no-repeat 100% 50%; background-size: 15px 15px;}
  .tbl-type1 thead th.header.headerSortUp span {background:url(img/desc.gif) no-repeat 100% 50%; background-size: 15px 15px;}
  .tbl-type1 tbody tr.even td {background:#f2f2f2;}
  .tbl-type1 tbody tr.line td {border-bottom:1px solid #333;}
   .tbl-type1 tbody .link{cursor: pointer; color: -webkit-link;text-decoration: underline;}
  .modify_desc .tbl-type1 {margin:0;}

  .desc {margin:10px 0;}
  .desc li {margin:3px 0;padding-left:7px;}

  .list-type1 {margin-top:0.5em;margin-bottom:0.5em;}
  .list-type1 li {list-style-type:circle;}
  .list-type1 li em {font-weight:bold;letter-spacing:-1px;color:#F70000;}

  .tab-type1 {overflow:hidden;margin:0.5em 0;font-size:14px;}
  .tab-type1 li {float:left;margin:0 20px 0 -1px;list-style:none;}

  .msg-box {margin:15px 0;}
  .msg-box .cite {text-align:right;}
  .msg-box .example-img {display:block;margin:12px;}
  .msg-box .setup-path {margin:12px 0;color:#fff;font-weight:bold;}
  .msg-box .setup-path span {padding:7px 10px;background-color:#007100;}
  .msg-box .syntax-container {margin:1em 0;padding:0;}
  .msg-box .syntax-container.syntax-theme-base .toolbar a {font-size:12px;}

  .example-img {margin:10px 0;}

  pre {margin:10px 0;padding:10px;background:#f2f2f2;}

  /* fieldset-폼 그룹핑이 아닌 그리드 용으로 사용됨 */
  fieldset {border:1px solid #bbb;padding:5px 10px 10px 10px;}
  .contents01, .newsflash-wrap, .top-news-wrap, .fl {float:left;width:65%;}
  .contents02, .search-wrap, .hot-news-wrap, .fr {float:right;width:25%;}
}

</style>
