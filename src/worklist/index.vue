<template>
	<div id="devWrap">
		<h1>프로젝트명</h1>
		<ul id="gnb">
			<li class="on"><router-link to="/">작업목록</router-link></li>
			<li><router-link to="/guide">가이드</router-link></li>
			<li><router-link to="/rules">작업규칙</router-link></li>
		</ul>
		<h2>작업목록</h2>
		<h3 id="M0">작업공정률</h3>
		<table summary="" cellspacing="0" border="0" class="htmlProcess tbl-type1">
			<caption>
				작업공정률
			</caption>
			<colgroup>
				<col width="60" />
				<col span="4" width="12%" />
				<col width="*" />
			</colgroup>
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
					<td class="total_files">{{ tableItems.length }}</td>
					<td class="final_files">{{ final_files }}</td>
					<td class="waiting_files">{{ waiting_files }}</td>
					<td class="html_percent">{{ html_percent }}%</td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<h3 id="M1">개발목록</h3>
		<table
			summary="퍼블리싱 작업목록을 파일명과 완료일자로 보여주는 표"
			class="tbl-type1 sorttable"
		>
			<caption>
				작업목록
			</caption>
			<colgroup>
				<col width="60" />
				<col span="4" width="12%" />
				<col span="4" width="8%" />
				<col width="*" />
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
					<td>{{ index + 1 }}</td>
					<td>{{ item.kind }}</td>
					<td>{{ item.dep1 }}</td>
					<td>{{ item.dep2 }}</td>
					<td>{{ item.dep3 }}</td>
					<td>
						<router-link :to="item.file" target="_blank" :title="item.file">{{
							item.file
						}}</router-link>
					</td>
					<td>{{ item.worker }}</td>
					<td>{{ item.workDate }}</td>
					<td>{{ item.comment }}</td>
					<td>{{ item.modDate }}</td>
					<td>
						<template v-if="item.history.length > 0">
							<a class="link" @click="openModHistoryPop(item.history)"
								>수정내역</a
							>
						</template>
					</td>
				</tr>
			</tbody>
		</table>
		<span class="btn-top"><a href="#devWrap">&uarr; 위로</a></span>
		<!-- modal -->
		<div class="modal-overlay" v-if="modPop"></div>
		<div class="wrap-layer-on" v-if="modPop">
			<div class="layer-type1 layer-type1-w1">
				<div class="layer-header">
					<h1>수정내역</h1>
					<button class="btn-close" @click="modPop = false">
						타이틀 컨텐츠 닫기<span></span>
					</button>
				</div>
				<div class="layer-content">
					<table summary="파일수정내역" class="tbl-type1">
						<colgroup>
							<col width="100" />
							<col width="*" />
						</colgroup>
						<thead>
							<tr>
								<th class="header">최종수정일</th>
								<th class="header">수정내용</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in modHistory" :key="index">
								<td>{{ item.date }}</td>
								<td>{{ item.cont }}</td>
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
// import './scss/style.scss';
export default {
	name: 'worklist',
	data() {
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
					history: [
						{
							date: '2014-11-17',
							cont: '가입안내, 회원종류선택, 약관동의 한페이지로 UI구성',
						},
					],
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
					history: [],
				},
			],
		};
	},
	computed: {
		final_files() {
			return this.tableItems.filter(item => item.workDate !== '').length;
		},
		waiting_files() {
			return this.tableItems.length - this.final_files;
		},
		html_percent() {
			return (this.final_files / this.tableItems.length) * 100;
		},
	},
	methods: {
		openModHistoryPop(history) {
			this.modHistory = history;
			this.modPop = true;
		},
	},
};
</script>
<style lang="scss">
@import './scss/style.scss';
</style>
