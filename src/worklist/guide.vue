<template>
	<div id="devWrap">
		<h1>프로젝트명</h1>
		<ul id="gnb">
			<li><router-link to="/">작업목록</router-link></li>
			<li class="on"><router-link to="/guide">가이드</router-link></li>
			<li><router-link to="/rules">작업규칙</router-link></li>
		</ul>
		<h2>가이드</h2>
		<table summary="퍼블리싱 가이드" class="tbl-type1 sorttable">
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
export default {
	name: 'worklist',
	data() {
		return {
			modPop: false,
			modHistory: [],
			tableItems: [
				{
					kind: '컨텐츠',
					dep1: '기본정의',
					dep2: '',
					dep3: '',
					file: '/guide/basic',
					worker: '김인혜',
					workDate: '2014-11-27',
					comment: '',
					modDate: '',
					history: [],
				},
			],
		};
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
