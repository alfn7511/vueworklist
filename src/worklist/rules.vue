<template>
	<div id="devWrap">
		<h1>프로젝트명</h1>
		<ul id="gnb">
			<li><router-link to="/">작업목록</router-link></li>
			<li><router-link to="/guide">가이드</router-link></li>
			<li class="on"><router-link to="/rules">작업규칙</router-link></li>
		</ul>
		<h2>작업규칙</h2>
		<ul class="tab-type1">
			<li><a href="#M0">기본정책</a></li>
			<li><a href="#M1">네이밍 규칙</a></li>
			<li><a href="#M2">HTML 코드 작성 규칙</a></li>
			<li><a href="#M3">HTML 엘리먼트 작성 규칙</a></li>
			<li><a href="#M4">CSS 코드 작성 규칙</a></li>
			<li><a href="#M5">기타</a></li>
		</ul>
		<div class="guide">
			<!-- 기본정책 -->
			<div id="M0">
				<h3>기본정책</h3>
				<h4>지원 브라우저 범위</h4>
				<ul>
					<li>Explorer : 9이상 (7,8의 경우 고정사이즈, 6이하 미지원)</li>
					<li>
						기타 모든 표준 브라우져 : Chrome, Firefox, Safari, Opera 등
						PC/모바일 브라우져
					</li>
				</ul>
				<h4>반응형 분기</h4>
				<ul>
					<li>모바일 / 테블릿 / PC</li>
					<li>
						기본 유동형 그리드. 컨텐츠 특성에 따라 일부 분기점 기준으로한 반응형
						유동형 그리드.
					</li>
					<li>레이아웃 분기점 : 모바일UI 680px | 테블릿UI 980px</li>
					<li>모바일 라스트기준</li>
				</ul>
			</div>
			<!-- //기본정책 -->
			<!-- 네이밍 규칙 -->
			<div id="M1">
				<h3>네이밍 규칙</h3>
				<div class="msg-box">
					<h4>공통 규칙</h4>
					<div class="content">
						<h5>공통 네이밍 규칙 예</h5>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th>설명</th>
									<th width="150">잘못된 예</th>
									<th width="150">올바른 예</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										시작이름은 영문 대문자, 숫자, 특수문자로 시작할 수
										없다.(파일 및 폴더 제외)
									</td>
									<td>Tit_pop.html<br />*-hidden-obj<br />03_btn_more.gif</td>
									<td>tit-section</td>
								</tr>
								<tr>
									<td>
										네이밍의 조합은 '형태_의미_순서_상태'을 기본 순서로
										사용한다.
									</td>
									<td>cancle_btn_off_01.gif, msgbox-off-toggle</td>
									<td>btn_cancle_01_off.gif, msgbox-toggle-off</td>
								</tr>
								<tr>
									<td>
										네이밍 규칙의 언더스코어(_) 조합은 파일, 폴더, 이미지에
										사용한다.
									</td>
									<td>customerService</td>
									<td>customer_service</td>
								</tr>
								<tr>
									<td>
										네이밍 규칙의 하이픈(-) 조합은 CSS 네이밍에 사용하는 것을
										권장한다.<br />HTML 문서 안에서 언더스코어(_)의 조합은 form,
										input 엘리먼트등의 name 어트리뷰트의 값을 사용하는 것을
										권장한다.(클래스 네이밍 규칙 참고)
									</td>
									<td>hidden_obj</td>
									<td>hidden-obj</td>
								</tr>
								<tr>
									<td>
										파일 및 폴더의 경우 1, 2과 같은 한자리 정수는 사용하지
										않으며 01, 02과 같이 사용하며 사용을 권장한다.<br />대부분의
										파일관리 유틸리티 프로그램들을 사용하여 파일의 이름으로
										정렬할 때에 정렬의 순서를 보장하기 위함이다.
									</td>
									<td>cyber_center_1, cyber_center_2</td>
									<td>cyber_center_01, cyber_center_02</td>
								</tr>
								<tr>
									<td>
										동일한 이름의 네이밍의 경우 가장 뒤에 숫자를 사용하여
										분류지어 사용할 수 있으며 첫번째 파일은 숫자를 생략하여
										사용할 수 있다.
									</td>
									<td>box-type01, <br />box-type02, <br />box-type03</td>
									<td>box-type, <br />box-type02, <br />box-type03</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="msg-box">
					<h4>파일 및 폴더</h4>
					<div class="content">
						<p>
							개발과 기획에서 정의된 디렉토리 구조도 및 화면 아이디가 정의가
							되어있다면 그에 준한 규칙에 따라 파일 및 폴더의 이름을 사용한다.
						</p>
						<h5>파일 및 폴더 네이밍 규칙 예</h5>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th width="150">분류</th>
									<th width="150">예제</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowspan="4">Folder</td>
									<td>html</td>
									<td>
										업무별 폴더 생성가능. 00.service, 01.customer, 02.account
									</td>
								</tr>
								<tr>
									<td>js</td>
									<td>라이브러리별 폴더 생성 가능</td>
								</tr>
								<tr>
									<td>css</td>
									<td>디렉토리별 폴더 생성 가능</td>
								</tr>
								<tr>
									<td>img</td>
									<td>네이밍별 폴더 생성 가능</td>
								</tr>
								<tr>
									<td rowspan="5">HTML</td>
									<td>0101.html</td>
									<td>
										화면 코드 사용(별도의 정의된 네이밍 룰이 없을 경우 사용)
									</td>
								</tr>
								<tr>
									<td>00_customer_service_list.html</td>
									<td>화면 코드, 메뉴명, 상태의 조합</td>
								</tr>
								<tr>
									<td>00_pop_*.html</td>
									<td>팝업 파일 사용</td>
								</tr>
								<tr>
									<td>00_aj_*.html</td>
									<td>ajax 이용하여 페이지를 동적으로 사용하는 파일</td>
								</tr>
								<tr>
									<td>00_if_*.html</td>
									<td>iframe 파일</td>
								</tr>
								<tr>
									<td rowspan="4">CSS</td>
									<td>default.css</td>
									<td>브라우저 호환성을 위하여 기본 css 속성을 정의</td>
								</tr>
								<tr>
									<td>common.css</td>
									<td>
										전역에 쓰이는 요소의 표현을 정의하며 레이아웃 css 및 html의
										업무별, 디렉토리별 구분하여 작성한 css 파일을 @import 한다.
									</td>
								</tr>
								<tr>
									<td>content.css</td>
									<td>
										사이즈 전체에 쓰이는 기본 퍼블리싱 가이드성 css를 정의
									</td>
								</tr>
								<tr>
									<td>service.css</td>
									<td>
										파일의 구분이 필요할 경우, 컨텐츠 카테고리 및 폴더명을 사용
									</td>
								</tr>
								<tr>
									<td>JS</td>
									<td>common.js</td>
									<td>전역에 사용하는 UI관련 스크립트를 작성한다.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="msg-box">
					<h4>아이디(id)</h4>
					<div class="content">
						<h5>아이디 네이밍 규칙 예</h5>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th>잘못된 예</th>
									<th>올바른 예</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>error_Mesage</td>
									<td>errorMesage</td>
								</tr>
								<tr>
									<td>control_center</td>
									<td>controlCenter</td>
								</tr>
							</tbody>
						</table>
						<ul class="list-type1">
							<li>
								시작의 이름은 영문 소문자를 사용하되 두 번째 단어부터 첫 번째
								문자를 대문자로 처리하는 기법(<strong>카멜 케이스</strong>)을
								사용한다.
							</li>
							<li>동일한 이름의 id는 문서에서 한번만 사용이 가능하다.</li>
							<li>
								지정된 레이아웃 및 폼객체를 제외한 스타일 지정을 위하여 id를
								사용하지 않는다.
							</li>
							<li>앵커로서 사용되는 엘리먼트는 id 지정이 가능하다.</li>
							<li>
								User Interface 동작을 위하여 DOM 선택자로서의 id 지정은
								가능하다.
							</li>
							<li>예약어가 있는 경우 예약어를 사용한다.</li>
						</ul>
						<h5>레이아웃 예약어</h5>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th width="150">예약어</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>#wrapper</td>
									<td>페이지 전체 영역 그룹핑</td>
								</tr>
								<tr>
									<td>#header</td>
									<td>머리글 영역</td>
								</tr>
								<tr>
									<td>#container</td>
									<td>본문영역 그룹핑</td>
								</tr>
								<tr>
									<td>#content</td>
									<td>주요컨텐츠 영역</td>
								</tr>
								<tr>
									<td>#footer</td>
									<td>바닥글</td>
								</tr>
								<tr>
									<td>#popWrapper</td>
									<td>팝업 페이지 전체 영역 그룹핑</td>
								</tr>
								<tr>
									<td>#popHeader</td>
									<td>팝업 머리글 영역</td>
								</tr>
								<tr>
									<td>#popContainer</td>
									<td>팝업 본문영역 그룹핑</td>
								</tr>
								<tr>
									<td>#popContent</td>
									<td>팝업 주용컨텐츠 영역</td>
								</tr>
								<tr>
									<td>#popFooter</td>
									<td>팝업 바닥글</td>
								</tr>
							</tbody>
						</table>
						<h5>동작을 위한 DOM 선택 예약어</h5>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th width="150">예약어</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>#navGnb</td>
									<td>Global Navigation Bar</td>
								</tr>
								<tr>
									<td>#navLnb</td>
									<td>Local Navigation Bar</td>
								</tr>
								<tr>
									<td>#navSnb</td>
									<td>Side Navigation Bar</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="msg-box">
					<h4>클래스(class)</h4>
					<div class="content">
						<h5>클래스 네이밍 규칙 예</h5>
						<p class="desc"></p>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th>잘못된 예</th>
									<th>올바른 예</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>error-Mesage</td>
									<td>error-mesage</td>
								</tr>
								<tr>
									<td>control_center</td>
									<td>control-center</td>
								</tr>
							</tbody>
						</table>
						<ul class="list-type1">
							<li>
								네이밍은 - (하이폰) 사용을 기본으로 한다.<br />(클래스 네임이
								서버사이드 스크립트의 변수와 자바스크립트의 변수 정의시 혼돈을
								방지)
							</li>
							<li>
								시작의 이름은 영문 소문자를 사용하며 두 번째 단어부터
								하이픈(-)으로 연결하며 대문자는 사용하지 않는다.
							</li>
							<li>영문 소문자, 숫자, 하이픈(-)만 사용할 수 있다.</li>
							<li>하이픈(-)은 2개 이상의 단어를 조합할 때만 사용한다.</li>
							<li>
								클래스 예약어에 숫자, 영문소문자, 하이픈(-)을 조합하여 사용할 수
								있다.
							</li>
							<li>
								하이픈(-)을 이용하여 3단계를 초과하여 사용하는 방법은 지양한다.
							</li>
							<li>숫가자 없으면 '01'이라는 숫자가 생략된 것으로 간주한다.</li>
							<li>
								다중의 클래시 지정을 허용하며 최대 3개 이상 사용하지 않도록
								주의한다.
							</li>
						</ul>
						<h4>기본적 클래스 예약어</h4>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th width="150">예약어</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>.aside-*</td>
									<td>
										보통 #container 또는 #content 에 종속 되며 곁가지 영역으로
										불리기도 한다.
									</td>
								</tr>
								<tr>
									<td>.gnb</td>
									<td>
										최상위 공통 네비게이션(Global Navigation Bar)을 지정합니다.
										보통 수평(bar)형태로 표현되며 #header 에 종속된다. 수직으로
										표현되는 경우는 거의 드물지만 그러한 경우 #header 에
										종속되지 않을 수도 있다..
									</td>
								</tr>
								<tr>
									<td>.lnb</td>
									<td>
										현재 서비스의 지역(Local Navigation Bar) 네비게이션을 지정
										합니다. 보통 수평(bar)형태로 표현되며 #header 에 종속된다.
										수직으로 표현되는 경우는 거의 드물지만 그러한 경우 #header
										에 종속되지 않을 수도 있다.
									</td>
								</tr>
								<tr>
									<td>.nav-*</td>
									<td>gnb, lnb, snb 이외의 네비게이션을 지정합니다.</td>
								</tr>
								<tr>
									<td>.path</td>
									<td>
										현재 페이지의 경로를 지정합니다. 보통 #container 또는
										#content 에 종속됩니다.
									</td>
								</tr>
								<tr>
									<td>.section-*</td>
									<td>
										콘텐츠를 분할하거나 그룹핑 하는 블럭 입니다. 보통 #content
										내부에 배치한 다음 heading 태그(h2~h6)와 함께 사용하는 것을
										권장합니다.
									</td>
								</tr>
								<tr>
									<td>.snb</td>
									<td>
										.gnb, .lnb 를 제외한 측면(Side Navigation Bar) 네비게이션
										영역을 지정합니다. 보통 #container 에 종속되고 수직으로
										표현되지만 수평으로 표현되는 경우도 있으므로 #header 에
										종속되는 등 예외의 경우도 있을 수 있습니다.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="msg-box">
					<h4>이미지 네이밍 규칙</h4>
					<p>
						비쥬얼이미지를 제외한 이미지는 최소화한다. 스프라이트기법으로
						용량보다는 갯수최소화 지향
					</p>
					<div class="content">
						<h5>이미지 네이밍 규칙 예</h5>
						<p class="desc"></p>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th width="150">잘못된 예</th>
									<th>올바른 예</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>on_tab_info.gif</td>
									<td>tab_info_01_on.gif</td>
									<td>형태_의미_순서_상태 순서로 조합한다.</td>
								</tr>
								<tr>
									<td>tio.gif</td>
									<td>tab_info_on.gif</td>
									<td>임의로 축약하지 않는다.</td>
								</tr>
								<tr>
									<td>tbl_type_list_02_off.gif</td>
									<td>tbl_list_02_off.gif</td>
									<td>가급적 4단계 이하의 조합을 사용한다.</td>
								</tr>
								<tr>
									<td>btn_Active.gif</td>
									<td>btn_active.gif</td>
									<td>영문 소문자를 사용한다.</td>
								</tr>
								<tr>
									<td>dot_type1.gif</td>
									<td>dot_1x1_b3b3b3.gif</td>
									<td>
										동일이미지 중복생성을 필하기 위해 블릿, 도트등은 네이밍으로
										기본이미지를 구분할수 있는 네이밍을 사용한다.
									</td>
								</tr>
							</tbody>
						</table>
						<ul class="list-type1">
							<li>
								이미지 네이밍의 조합은 '형태_의미_순서_상태'의 순서로 조합한다.
							</li>
							<li>같은 이름의 이미지가 두 개 이상 존재하면 숫자로 구분한다.</li>
							<li>
								이미지 네이밍은 이미지의 확장자에 관계 없이 순차적으로 적용한다.
								예) btn_confirm.gif, btn_confirm_02.jpg, btn_confirm_03.png
							</li>
							<li>임시이미지에 한하여 @특수문자를 처음으로 사용할 수 있다.</li>
							<li>
								이미지 예약어에 숫자, 영문소문자, 언더스코어(_)를 조합하여
								사용할 수 있다.
							</li>
						</ul>
						<h5>이미지 예약어</h5>
						<table summary="" class="tbl-type1" cellspacing="0">
							<thead>
								<tr>
									<th width="150">분류</th>
									<th width="200">예약어</th>
									<th width="300">사용 예</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowspan="3">텍스트</td>
									<td>h[1-6]_*, h_*</td>
									<td>h_logo.gif, h22_header.gif, h2_article.gif</td>
									<td>heading 요소에 사용한다.</td>
								</tr>
								<tr>
									<td>tit_*</td>
									<td>
										tit_leble_id.gif, tit_definition_list, tit_table_th.gif
									</td>
									<td>
										heading 요소로 사용되지는 않고 문단의 강조를 나타내는 형식의
										텍스트, 주로 테이블의 제목셀, dt 엘리먼트, label 엘리먼트,
										strong 엘리먼트에 사용
									</td>
								</tr>
								<tr>
									<td>txt_*</td>
									<td>txt_msg.gif, txt_desc_1</td>
									<td>문단의 이미지로된 텍스트에 사용</td>
								</tr>
								<tr>
									<td rowspan="3">링크요소</td>
									<td>nav_*</td>
									<td>nav_gnb_ko.gif, nav_gnb_login.gif, nav_lnb_about.gif</td>
									<td>lnb, gnb, snb 등의 네비게이션 요소에 사용</td>
								</tr>
								<tr>
									<td>tab_*</td>
									<td>tab_style_01_on.gif, tab_style_01_off.gif</td>
									<td>네비게이션 요소를 제외한 탭 메뉴 형태에 사용</td>
								</tr>
								<tr>
									<td>btn_*</td>
									<td>btn_ok.gif, btn_ok_02.gif, btn_bg_type.gif</td>
									<td>
										버튼 형식의 a 엘리먼트, button 엘리먼트, input[type=image]
										엘리먼트 요소에 사용한다. 버튼의 이미지가 배경으로
										사용하여도 btn_* 예약어를 사용
									</td>
								</tr>
								<tr>
									<td>박스</td>
									<td>box_*</td>
									<td>box_type.gif, box_login.gif</td>
									<td>grouping 목적으로 사용되는 div 엘리먼트에 주로 사용</td>
								</tr>
								<tr>
									<td>블릿/도트</td>
									<td>bul_*</td>
									<td>bul01_8x8_828282.gif, dot_1x1_b3b3b3.gif</td>
									<td>의미가 없는 요소로 사용할 수 있는 이미지로 사용.</td>
								</tr>
								<tr>
									<td>화살표</td>
									<td>arr1_*, arr2_*, arr1_*, arr4_*</td>
									<td>arr1_9x5_eb9037.gif, arr2_5x9_eb9037.gif</td>
									<td>
										화살표의 경우 화살표방향에 따라 top, right, bottom, left
										순으로 1~4를 사용
									</td>
								</tr>
								<tr>
									<td>아이콘</td>
									<td>icon_*</td>
									<td>icon_download.gif, icon_upload.gif</td>
									<td>의미가 있는 요소로 설명에 대한 텍스트가 명확한 경우</td>
								</tr>
								<tr>
									<td>상태</td>
									<td>*_on, *_off, *_over</td>
									<td>
										tab_type_01_on.gif, tab_type_01_off.gif,
										tab_type_01_over.gif
									</td>
									<td>활성, 비활성, 오버/포커스 상태에 대한 표현에 사용</td>
								</tr>
								<tr>
									<td>임시</td>
									<td>@*</td>
									<td>
										@tm_layout_header.jpg, @thumb_photo_1.jpg, @ad_main_1.jpg
									</td>
									<td>
										임시로 레이아웃의 구조에 사용되는 이미지 또는 개발과
										연동되는 부분의 썸네일 이미지, 광고영역의 이미지에 사용
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- //네이밍 규칙 -->
			<!-- HTML 코드 작성 규칙 -->
			<div id="M2">
				<h3>HTML 코드 작성 규칙</h3>
				<div class="msg-box">
					<h4>파일의 경로</h4>
					<div class="content">
						<p>
							유지보수의 편의를 및 HTML 작업자의 퍼포먼스를 위하여
							<strong>상대 경로</strong>로 작업한다. 작업이 완료된 HTML 파일은
							로컬 브라우저와 다양한 OS에서 확인이 가능하여야 한다.
						</p>
						<pre class="syntax brush-html">
&lt;!-- 스타일시트 파일 경로 --&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/default.css"&gt;
&lt;!-- 스크립트 파일 경로 --&gt;
&lt;script src="../resources/js/common.js"&gt;&lt;/script&gt;
&lt;!-- 이미지 파일 경로 --&gt;
&lt;img src="../resources/img/img.gif" alt="대체텍스트" &gt;</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>head 영역의 파일 링크</h4>
					<div class="content">
						<p>
							웹 문서 전송 속도를 높이기 위하여(Request Count 감소) 최소한의
							파일을 사용한다.
						</p>
						<pre class="syntax brush-html">
&lt;!-- 기본 전역 설정 스타일 시트 --&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/default.css"&gt;
&lt;!-- css 임포트 --&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/common.css" /&gt;
&lt;!-- jQuery 라이브러리 사용(최대로 압축된 파일사용) --&gt;
&lt;script src="../resources/js/jquery.1.8.3.min.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/jquery.ui.1.8.23.min.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/jquery.easing.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/iscroll.js"&gt;&lt;/script>
&lt;!-- 프론트 앤드에 사용되는 UI관련 스크립트 --&gt;
&lt;script src="../resources/js/common.js"&gt;&lt;/script&gt;</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>표준 문법의 사용</h4>
					<div class="content">
						<p>
							HTML5은 해당 DTD의 명세에 맞게 작성하며, W3C validation을 통과해야
							한다.
						</p>
						<h5>주의 해야할 특수기호 Entity name</h5>
						<table cellspacing="0" summary="" class="tbl-type1">
							<tbody>
								<tr>
									<th>Character</th>
									<td>"</td>
									<td>&amp;</td>
									<td>&lt;</td>
									<td>&gt;</td>
									<td>&nbsp;</td>
									<td>&middot;</td>
								</tr>
								<tr>
									<th>Entity Name</th>
									<td>&amp;quot;</td>
									<td>&amp;amp;</td>
									<td>&amp;lt;</td>
									<td>&amp;gt;</td>
									<td>&amp;nbsp;</td>
									<td>&amp;middot;</td>
								</tr>
							</tbody>
						</table>
						<div class="cite">
							* 참고 :
							<a
								href="http://w3schools.com/tags/ref_entities.asp"
								target="_blank"
								title="새창"
								>HTML ISO-8859-1 Reference</a
							>
						</div>
						<ul class="list-type1">
							<li>
								DTD를 제외한 모든 엘리먼트와 애트리뷰트는 소문자로 작성한다.
							</li>
							<li>애트리뷰트의 값은 큰따움표("")로 묶는다.</li>
							<li>
								특수기호는 Entity name을 사용하여 entity 코드로 변환한다. Entity
								코드는 ISO-8859-1을 기준으로 한다.
							</li>
							<li>
								종료 태그는 생략한다 : 전체 마크업은
								<a
									href="http://www.w3.org/html/wg/drafts/html/master/"
									target="_blank"
									title="새창"
									>w3c html5문법</a
								>에 준하여 사용한다.
							</li>
						</ul>
					</div>
				</div>
				<div class="msg-box">
					<h4>파일의 인코딩</h4>
					<div class="content">
						<p>
							*.html, *.css, *.js의 파일의 저장 방식을 UTF-8로 설정한다. 반드시
							개발과 협의가 필요하다.
						</p>
						<h4>문자셋(charset)별 인코딩</h4>
						<table cellspacing="0" summary="" class="tbl-type1">
							<tbody>
								<tr>
									<th>문자셋(charset)</th>
									<th>기본 인코딩</th>
								</tr>
								<tr>
									<td>charset=utf-8</td>
									<td>utf-8</td>
								</tr>
								<tr>
									<td>charset=euc-kr</td>
									<td>ANSI</td>
								</tr>
							</tbody>
						</table>
						<p class="setup-path">
							<span
								>Editplus 파일 저장 설정 방법 : Editplus &gt; 도구 &gt; 기본설정
								&gt; 파일</span
							>
						</p>
						<img src="img/setting_encoding.gif" alt="" class="example-img" />
					</div>
				</div>
				<div class="msg-box">
					<h4>코드 들여쓰기</h4>
					<div class="content">
						<p>
							코드의 가독성을 높이고 전체 HTML 구조를 쉽게 파악하기 위하여
							들여쓰기 규칙을 준수한다. 마크업의 중첩이 깊어질 때마다 자식
							엘리먼트는 1탭 들여 쓰고, 1탭의 크기는 공백 4칸으로 설정한다.
						</p>
						<p class="setup-path">
							<span
								>Editplus 들여쓰기 지정 방법 : Editplus &gt; 도구 &gt; 기본설정
								&gt; 파일 &gt; 설정및 구문강조 &gt; 탭/들여쓰기</span
							>
						</p>
						<img src="img/setting_indent.gif" alt="" class="example-img" />
						<h4>들여쓰기를 하지 않는 경우</h4>
						<pre class="syntax brush-html">
&lt;!doctype html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" &gt;
&lt;meta name="keywords" content="코리아닷컴, 코리아닷컴TV, 아웃도어. 등등등.." &gt;
&lt;meta name="description" content="코리아닷컴 및 해당컨텐츠 간략설명." &gt;
&lt;title&gt;NEPA&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/default.css"&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/common.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="wrapper"&gt;
&lt;/div&gt;
&lt;script src="../resources/js/jquery.1.8.3.min.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/jquery.ui.1.8.23.min.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/jquery.easing.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/iscroll.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/common.js"&gt;&lt;/script&gt;
&lt;/body&gt;
</pre
						>
						<ul class="list-type1">
							<li>html의 자식 엘리먼트인 head, body</li>
							<li>head의 자식 엘리먼트인 meta, link, script</li>
							<li>body의 자식 첫 번째 엘리먼트 div="wrapper"</li>
						</ul>
					</div>
				</div>
				<div class="msg-box">
					<h4>빈줄 / 주석</h4>
					<div class="content">
						<p>
							그룹을 감싸고 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈
							줄을 만드는 것은 허용한다. 빈 줄의 간격이 1줄을 초과하지 않으며
							<em>개발과 연동되는 그룹의 경우는 빈줄보다 주석을 작성</em>한다.
						</p>
						<p>
							코드의 가독성을 높이고 전체 HTML 구조를 쉽게 파악하기 위하여
							주석사용을 준수한다.
						</p>
						<pre class="syntax brush-html">
&lt;!-- ### header ### --&gt;
&lt;header id="header"&gt;
	&lt;!-- S 로고 --&gt;
	&lt;h1&gt;로고&lt;/h1&gt;
	&lt;!-- E 로고 --&gt;
&lt;/header&gt;

&lt;!-- ### 컨텐츠 영역 ### --&gt;
&lt;div id="container"&gt;

&lt;/div&gt;

&lt;!-- ### footer 영역 ### --&gt;
&lt;footer id="footer"&gt;
&lt;/footer&gt;</pre
						>
						<ul class="list-type1">
							<li>
								주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.
							</li>
							<li>
								시작(S)과 종료(E) 주석의 내용은 동일해야 한다. 그룹간 1줄 빈줄이
								있을경우(예:레이아웃관련)에는 종료주석을 생략할 수 있다.
							</li>
							<li>
								레이아웃 엘리먼트를 제외한 독립된 콘텐츠 영역의 주석 표기는 선택
								사항이다.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- //HTML 코드 작성 규칙 -->
			<!-- HTML 엘리먼트 작성 규칙 -->
			<div id="M3">
				<h3>HTML 엘리먼트 작성 규칙</h3>
				<div class="msg-box">
					<h4>문서형(Document Type Definition) 선언</h4>
					<div class="content">
						<p>
							문서형을 선언하지 않으면 브라우저 호환성을확보하지 못함. 문서형을
							선언하는 것은 상호 운용성을 보장하기 위함이다.
						</p>
						<pre class="syntax brush-html">&lt;!doctype html&gt;</pre>
					</div>
				</div>
				<div class="msg-box">
					<h4>언어 지정</h4>
					<div class="content">
						<p>
							lang 애트리뷰트는 User Agent가 언어를 올바로 해석할 수 있게
							도와주며, 검색과 음성 장치에 활용된다.
						</p>
						<pre class="syntax brush-html">&lt;html lang="ko"&gt;</pre>
						<p class="cite">
							* 참고 :
							<a href="http://www.w3schools.com/tags/ref_language_codes.asp"
								>ISO Language Codes</a
							>
						</p>
					</div>
				</div>
				<div class="msg-box">
					<h4>&lt;head&gt; 구조</h4>
					<div class="content">
						<p>meta, title, link, script 순서로 엘리먼트를 선언.</p>
						<pre class="syntax brush-html">
&lt;!doctype html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" &gt;
&lt;meta name="keywords" content="코리아닷컴, 코리아닷컴TV, 아웃도어. 등등등.." &gt;
&lt;meta name="description" content="코리아닷컴 및 해당컨텐츠 간략설명." &gt;
&lt;title&gt;NEPA&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/default.css"&gt;
&lt;link rel="stylesheet" type="text/css" href="../resources/css/common.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="wrapper"&gt;
&lt;/div&gt;
&lt;script src="../resources/js/jquery.1.8.3.min.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/jquery.ui.1.8.23.min.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/jquery.easing.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/iscroll.js"&gt;&lt;/script&gt;
&lt;script src="../resources/js/common.js"&gt;&lt;/script&gt;
&lt;/body&gt;</pre
						>
						<ul class="list-type1">
							<li>
								script는 &lt;head&gt;&lt;/head&gt; 내에 선언하는 것을
								원칙으로하며 단, 성능상의 이슈가 있으면 개발 부서와 협의하여
								선언 위치를 변경 할수 있다.
							</li>
						</ul>
					</div>
				</div>
				<div class="msg-box">
					<h4>문자셋(charset) 지정</h4>
					<div class="content">
						<p>
							utf-8 인코딩 기본. DB의 인코딩 방식과도 관련이 있으므로 개발자와
							협의하여 결정.
						</p>
						<pre class="syntax brush-html">&lt;meta charset="utf-8"&gt;</pre>
						<ul class="list-type1">
							<li>
								utf-8은 다국어 지원이 가능하며, euc-kr 보다 표현 가능한
								한글(고어, 음절 등)이 많음.
							</li>
							<li>
								한글은 utf-8에서 3바이트, euc-kr에서 2바이트를 차지하기 때문에
								utf-8이 euc-kr에 비하여 DB 저장 용량이나 트래픽이 많을수 있음.
							</li>
						</ul>
					</div>
				</div>
				<div class="msg-box">
					<h4>SEO(검색 엔진 최적화)</h4>
					<ul class="list-type1">
						<li>
							참고 :
							<a
								href="https://static.googleusercontent.com/media/www.google.co.kr/ko/kr/intl/ko/webmasters/docs/search-engine-optimization-starter-guide-ko.pdf"
								target="_blank"
								>구글 검색엔진 최적화 방법</a
							>
						</li>
					</ul>
					<div class="content">
						<h5>keywords</h5>
						<ul>
							<li>
								&lt;meta name="keywords" content="코리아닷컴, 코리아닷컴TV,
								아웃도어. 등등등.." /&gt;
							</li>
							<li>
								페이지 키워드를 기재/콤마(,)로 구별하여 기술/동의어와 유의어를
								포함.
							</li>
						</ul>
						<h5>description</h5>
						<ul>
							<li>페이지 정보 요약</li>
							<li>
								&lt;meta name="description" content="컨텐츠 관련 간략설명."
								/&gt;
							</li>
							<li>
								구글검색에서, 결과 페이지 내용 미리보기로 사용할 수도 있음.
							</li>
						</ul>
						<h5>Title / HX</h5>
						<p>각각의 페이지마다 고유한 Title 제공. 헤딩태그의 활용</p>
					</div>
				</div>
				<div class="msg-box">
					<h4>구조, 표현, 동작의 분리</h4>
					<div class="content">
						<p>
							문서의 구조(HTML)와 표현(CSS), 동작(script) 언어를 본래의 목적에
							맞게 최대한 분리한다.
						</p>
						<h5>예외사항</h5>
						<pre class="syntax brush-html">
	&lt;input type="text" id="formMyClass" class="my-class" style="width:200px;" /&gt;</pre
						>
						<ul class="list-type1">
							<li>
								특정 엘리먼트에 id, class, style을 선언할 때에 선언 순서는
								엘리먼트의 기본 애트리뷰트 지정후 마지막에 id, class와 style을
								선언한다.
							</li>
							<li>
								테이블 셀의 경우 다양한 너비의 고정폭을 지닐 수 있는데 이것을
								모두 CSS로 지정하는 것은 기대했던 효과에 대한 이점이 없으므로
								예외의 경우를 허용함
							</li>
							<li>
								input[text], select 엘리먼트의 경우 너비의 고정폭 지정 허용함
							</li>
						</ul>
					</div>
				</div>
				<div class="msg-box">
					<h4>table 엘리먼트 사용 방법</h4>
					<div class="content">
						<p>레이아웃을 표현하기 위하여 표를 사용하지 않는다.</p>
						<h5>올바른 테이블 사용 방법</h5>
						<div class="example-code">
							<table class="tbl-type1">
								<caption>
									담당자정보(서울,경기,강원,경상,부산)
								</caption>
								<tbody>
									<tr>
										<th scope="row">담당자</th>
										<td>이병렬 팀장</td>
									</tr>
									<tr>
										<th scope="row">전화번호</th>
										<td>02-3407-0237</td>
									</tr>
									<tr>
										<th scope="row">E-mail</th>
										<td>icarus7190@nepa.co.kr</td>
									</tr>
								</tbody>
							</table>
						</div>
						<pre class="syntax brush-html">
&lt;table class="tbl-type1"&gt;
	&lt;caption&gt;담당자정보(서울,경기,강원,경상,부산)&lt;/caption&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;th scope="row"&gt;담당자&lt;/th&gt;
			&lt;td&gt;이병렬 팀장&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th scope="row"&gt;전화번호&lt;/th&gt;
			&lt;td&gt;02-3407-0237&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th scope="row"&gt;E-mail&lt;/th&gt;
			&lt;td&gt;icarus7190@nepa.co.kr&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
&lt;/table&gt;</pre
						>
						<ul class="list-type1">
							<li>table 엘리먼트의 border 값은 클래스를 지정하여 사용한다.</li>
							<li>
								caption 엘리먼트는 표의 제목을 표현하며 표의 윗부분에 헤딩
								엘리먼트로 표의 제목을 표시하면 생략가능하다.
							</li>
							<li>
								디자인에 머리글이 제공되어 있지 않더라도 반드시 머리글을
								제공한다.
							</li>
							<li>
								행 제목과 열 제목이 있는 경우 이에 대한 scope 애트리뷰트를
								사용하여 행과 열의 범위를 적절히 구분하여 배치한다.
							</li>
						</ul>
					</div>
				</div>
				<div class="msg-box">
					<h4>엘리먼트의 기본 애트리뷰트 지정 순서</h4>
					<div class="content">
						<p>
							User Interface 의 동작이 요구되면 id 애트리 뷰트를 선택적으로
							사용할 수 있으며 위치는 기본 애트리뷰트의 지정후 다음에 위치한다.
							class 애트리뷰트는 가장 마지막에 작성한다. id와 class의 사용여부는
							선택 사항이다.<br />애트리 뷰트의 지정순서는 아래의 예제와 같으며
							여기서 언급 하지 않은 엘리먼트는 알파벳 순서로 애트리뷰트를
							작성한다.
						</p>
						<h5>A 엘리먼트</h5>
						<pre class="syntax brush-html">
&lt;a href="#none" title="새창" target="_blank"&gt;인쇄하기&lt;/a&gt;</pre
						>
						<ul class="list-type1">
							<li>
								<em>href 애트리뷰트의 값은 #none</em>로 한다. 앵커 기능이 있다면
								해당 엘리먼트의 id값을 작성한다.
							</li>
							<li>
								새 창으로 페이지를 표시해야 할 경우 target 애트리뷰트를
								선택적으로 사용한다.
							</li>
							<li>
								링크의 목표가 명확하지 않은 경우 title 애트리뷰트의 값으로
								부가적인 설명을 제공한다.
							</li>
						</ul>
						<h5>Iframe 엘리먼트</h5>
						<pre class="syntax brush-html">
&lt;iframe src="about:blank" title="빈프레임"&gt;&lt;/iframe&gt;</pre
						>
						<ul class="list-type1">
							<li>
								iframe 사용은 페이지 성능에 영향을 주시 때문에 가급적 사용을
								하지 않는다.<em
									>유투브 동영상 사용으로 동영상컨텐츠에 한하여 사용함</em
								>
							</li>
							<li>
								align, frameborder, longdesc, marginheight, marginwidth,
								scrolling등의 속성은 html5에서 지원되지 않으므로 사용시 참고<br /><a
									href="http://www.w3schools.com/tags/tag_iframe.asp"
									target="_blank"
									title="새창"
									>http://www.w3schools.com/tags/tag_iframe.asp</a
								>
							</li>
							<li>
								iframe을 포함하는 페이지의 도메인과 iframe에서 불러오는 페이지의
								도메인이 다르면, 크로스 도메인 설정을 위해 별도의 소스 코드가
								추가되어 성능의 영향을 줄 수 있다
							</li>
							<li>
								iframe은 가장 마지막으로 로딩되기 때문에 페이지 로딩 초기에는
								화면이 비어 보일 수 있다.
							</li>
						</ul>

						<h5>Img 엘리먼트</h5>
						<pre class="syntax brush-html">
&lt;img src="img.gif" alt="대체텍스트"&gt;</pre
						>
						<ul class="list-type1">
							<li>
								alt 애트리뷰트는 반드시 제공되어야 하며 빈 값을 사용하지
								않는다.(의미가 없는 이미지에 한하여 부분허용)
							</li>
							<li>
								유지보수의 편의성을 위하여 width, height 애트리뷰트는 사용하지
								않는다.
							</li>
							<li>이미지 맵 사용을 지양하며 포지셔닝 방법을 사용한다.</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- //HTML 엘리먼트 작성 규칙 -->
			<!-- CSS 코드 작성 규칙 -->
			<div id="M4">
				<h3>CSS 코드 작성 규칙</h3>
				<div class="msg-box">
					<h4>기본 규칙</h4>
					<div class="content">
						<p>
							문서의 첫 줄에 인코딩을 선언하며 인코딩은 HTML과 동일한 인코딩을
							지정한다. 작업 정보를 아래와 같은 방법으로 작성한다.
						</p>
						<h5>작업 정보</h5>
						<pre class="syntax brush-css">
@charset "utf-8";
/*************************************************
NEPA 2014 리뉴얼
commnet : common
*************************************************/</pre
						>
						<h5>모든 속성은 영문 소문자로만 작성</h5>
						<pre class="syntax brush-css">
/* 잘못된 예 */
.class-name {color:#FFF;}

/* 올바른 예 */
.class-name {color:#fff;}</pre
						>
						<h5>작은 따옴표('') 사용 범위</h5>
						<p>
							폰트의 선언,filter, content에 작은 따옴표('')를 사용한다. 그 외의
							경우는 사용하지 않는다.
						</p>
						<pre class="syntax brush-css">
.class-name {'dotum';}
.filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='img.png', sizingMethod='scale';}
.class-name:after{content:'.'}
.class-name {background:url(img.gif) no-repeat}</pre
						>
						<h5>세미콜론(;)</h5>
						<p>마지막 선언된 속성에도 세미콜론(;)을 사용한다.</p>
						<pre class="syntax brush-css">
/* 잘못된 예 */
.class-name {margin-left:0;padding-left:10px}

/* 올바른 예 */
.class-name {margin-left:0;padding-left:10px;}</pre
						>
						<h5>공백의 사용</h5>
						<p>
							선택자 간, 중괄호간 한칸의 공백을 사용한다, 중괄호 안쪽 좌우에는
							공백은 사용하지 않는다.
						</p>
						<pre class="syntax brush-css">
/* 잘못된 예 */
.class-name, .class-name .child-class{background:url(../img/img.gif) no-repeat}
.class-name {padding:0; margin:0}
.class-name { padding:0;margin:0 }

/* 올바른 예 */
.class-name,
.class-name .child-class {background:url(../img/img.gif) no-repeat;}
.class-name {padding:0;margin:0;}
.class-name {padding:0;margin:0;}</pre
						>
					</div>
				</div>

				<div class="msg-box">
					<h4>들여쓰기</h4>

					<div class="content">
						<p>CSS 코드 작성시 들여쓰기는 허용하지 않는다.</p>
						<pre class="syntax brush-css">
/* 잘못된 예 */
h4.class-name {
 font-size:1.25em;
 letter-spacing:-1px;
 margin:0.5em 0 0 0;
}

/* 올바른 예 */
h4.class-name {font-size:1.25em;letter-spacing:-1px;margin:0.5em 0 0 0;}</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>줄 바꿈</h4>
					<div class="content">
						<p>
							공통으로 사용되는 속성의 선택자간의 줄 바꿈은 허용하며 이 외의
							줄바꿈은 허용하지 않는다.
						</p>
						<pre class="syntax brush-css">
/* 잘못된 예 */
.class-name, .class-name .child-class{background:url(../img/img.gif) no-repeat;}

/* 올바른 예 */
.class-name,
.class-name .child-class {background:url(../img/img.gif) no-repeat;}</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>주석</h4>
					<div class="content">
						<p>
							CSS 주석 처리는 시작 주석을 작성하며 종료 주석은 작성하지 않는다.
							종료코드 이후에 오는 요소에 한 칸 띄어 쓰기를 허용한다.
						</p>
						<pre class="syntax brush-css">
/* title */
.title-type1 {margin:30px 0 10px 0;}

/* description */
.desc1 {padding:2px 0 0 15px;font-size:0.917em;}</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>빈줄</h4>
					<div class="content">
						<p>
							객체를 구분하기 위하여 코드 그룹 간 1줄의 빈 줄을 허용한다. 빈
							줄의 1줄을 초과하지 않는다.
						</p>
						<pre class="syntax brush-css">
/* 잘못된 예 */
/* title */
.title-type1 {margin:30px 0 10px 0;}
.title-type2 {margin:40px 0 10px 0;height:15px;padding:5px 0 0 29px;}

/* description */
.desc1 {padding:2px 0 0 15px;font-size:0.917em;}
.desc2 {margin-top:7px;padding-left:12px;}

/* 올바른 예 */
.title-type1 {margin:30px 0 10px 0;}

/* description */
.desc1 {padding:2px 0 0 15px;font-size:0.917em;}</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>선택자</h4>
					<div class="content">
						<h5>공통 선택자</h5>
						<p>
							'*' 공통 선택자는 웹 페이지의 성능을 저하를 가져오기 때문에
							사용하지 않는다.
						</p>
						<pre class="syntax brush-css">
/* 잘못된 예 */
	* {margin:0;padding:0}</pre
						>
						<!-- <h5>id와 class를 조합</h5>
					<p>id와 class를 조합하여 사용하지 않는다. id를 css로 표현하기 위하여 선택자로 사용하지 않는다. 레이아웃 요소로 예약되어 있는 id에 대해서는 예외 사항을 적용한다.</p>
					<pre class="syntax brush-css">/* 잘못된 예 */
	#header .lnb {margin:0;padding:0}

	/* 잘못된 예 */
	#lnbNav {position:relative;height:auto;}
	#gnbNav {position:absolute;width:800px;}

	/* 올바른 예 */
	.lnb-nav {position:relative;height:auto;}
	.gnb-nav {position:absolute;width:800px;</pre> -->
					</div>
				</div>
				<div class="msg-box">
					<h4>속성의 선언 순서</h4>
					<div class="content">
						<p>
							전체 속성의 선언 순서는 시계 방향으로 명시한다. top, right,
							bottom, left
						</p>
						<table cellspacing="0" summary="" class="tbl-type1">
							<thead>
								<tr>
									<th width="50">순서</th>
									<th width="150">속성</th>
									<th>속성 값</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>display</td>
									<td>
										none, block, inline, inline-block, inline-table, list-item,
										table, table-caption, table-cell, table-column,
										table-column-group, table-footer-group, table-header-group,
										table-row, table-row-group
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>visibility</td>
									<td>visible, hidden, collapse</td>
								</tr>
								<tr>
									<td>3</td>
									<td>overflow</td>
									<td>visible, hidden, scroll, auto</td>
								</tr>
								<tr>
									<td>4</td>
									<td>float</td>
									<td>left, right, none</td>
								</tr>
								<tr>
									<td>5</td>
									<td>position</td>
									<td>absolute, fixed, relative, static</td>
								</tr>
								<tr>
									<td rowspan="3">6</td>
									<td>width</td>
									<td rowspan="3">auto, length(px), %</td>
								</tr>
								<tr>
									<td>max-width</td>
								</tr>
								<tr>
									<td>min-width</td>
								</tr>
								<tr>
									<td rowspan="3">7</td>
									<td>height</td>
									<td rowspan="3">auto, length(px), %</td>
								</tr>
								<tr>
									<td>max-height</td>
								</tr>
								<tr>
									<td>min-height</td>
								</tr>
								<tr>
									<td>8</td>
									<td>margin</td>
									<td>auto, length(px, em), %</td>
								</tr>
								<tr>
									<td>9</td>
									<td>padding</td>
									<td>auto, length(px, em), %</td>
								</tr>
								<tr>
									<td>10</td>
									<td>border</td>
									<td>border-width, border-style, border-color</td>
								</tr>
								<tr>
									<td>11</td>
									<td>background</td>
									<td>
										background-color, background-image, background-repeat,
										background-attachment, background-position
									</td>
								</tr>
								<tr>
									<td>12</td>
									<td>font</td>
									<td>
										font-style, font-variant, font-weigth,
										font-size/line-height, font-family
									</td>
								</tr>
								<tr>
									<td rowspan="6">13</td>
									<td>color</td>
									<td>hex_number, hex_number</td>
								</tr>
								<tr>
									<td>letter-spacing</td>
									<td>normal, length</td>
								</tr>
								<tr>
									<td>text-decoration</td>
									<td>none, underline, overline, line-through, blink</td>
								</tr>
								<tr>
									<td>text-align</td>
									<td>left, right, center, justify</td>
								</tr>
								<tr>
									<td>white-space</td>
									<td>normal, nowrap, pre, pre-line, pre-wrap</td>
								</tr>
								<tr>
									<td>wrod-spacing</td>
									<td>normal, length(px, em, etc)</td>
								</tr>
								<tr>
									<td>13</td>
									<td>기타</td>
									<td>
										여기서 언급하지 않은 나머지 속성들은 폰트 속성 이후에
										선언하며, 선언 순서는 무관하다.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="msg-box">
					<h4>속성의 축약/약식 속성 사용</h4>
					<div class="content">
						<p>CSS 최적화를 위해 속성값을 축약 한다.</p>
						<table cellspacing="0" summary="" class="tbl-type1">
							<thead>
								<tr>
									<th width="200">축약 전</th>
									<th width="200">축약 후</th>
									<th>설명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>#FFFFFF</td>
									<td>#FFF</td>
									<td><em>컬러의 코드값은 축약하지 않는다.</em></td>
								</tr>
								<tr>
									<td>background-position:left center</td>
									<td>background-position:0 50%</td>
									<td>문자로 표현은 지양하며 숫자 사용을 지향한다.</td>
								</tr>
								<tr>
									<td>top:0px</td>
									<td>top:0</td>
									<td>속성의 값이 0일 경우 단위를 표시하지 않는다.</td>
								</tr>
								<tr>
									<td>margin:15px 15px 15px 15px</td>
									<td>margin:15px</td>
									<td rowspan="3">
										속성의 값이 동일한 경우 top, right, bottom, left 순서대로
										축약한다.
									</td>
								</tr>
								<tr>
									<td>margin:0 auto 0 auto</td>
									<td>margin:0 auto</td>
								</tr>
								<tr>
									<td>margin:25px 15px 30px 15px</td>
									<td>margin:25px 15px 30px</td>
								</tr>
							</tbody>
						</table>
						<h5>Background 약식 속성</h5>
						<p>
							배경 이미지의 속성의 초기 선언시 반드시 background 단일 속성을
							사용하며, 이후 배경적인 부분의 속성이 변경될 경우 background 관련
							속성을 사용하여 제 선언 한다. 선언 순서는 background-attachment,
							background-color, background-image, background-repeat,
							background-position 이다.
						</p>
						<pre class="syntax brush-css">
.class-name {border:1px solid #ccc;}
.class-name .child-bg-1 {background-position:0 -18px;}
.class-name .child-bg-2 {background-position:0 -36px;}</pre
						>
						<h5>Border 약식 속성</h5>
						<p>
							테두리의 스타일이 동일할 경우 반드시 border 단일 속성을 사용하고
							동일하지 않을 경우 부분적 border 속성을 사용할 수 있다.속성의 값의
							선언 순서는 border-width, border-style, border-color의 순서이다.
						</p>
						<pre class="syntax brush-css">
.class-name {border:1px solid #ccc;}
.class-name .top-border {border-top:2px solid #000;}
.class-name .left-border {border-left-width:0;}</pre
						>
						<h5>Font 약식 속성</h5>
						<p>
							폰트의 약식 속성에 대하여는 부분적으로 허용하며 폰트의 크기와
							라인의 높이를 동시에 제어를 하는 경우에 한하여 사용한다. 속성의
							선언순서는 font-style font-variant font-weight
							font-size/line-height font-family 이며 style, variant, weight는
							생략 가능하지만 font-size/line-height font-family는 필수 입력
							사항이다.
						</p>
						<pre class="syntax brush-css">
.class-name {font:1em/1.2 'dotum';}</pre
						>
					</div>
				</div>
				<div class="msg-box">
					<h4>미디어타입</h4>
					<div class="content">
						<p>
							미디어 타입은 공통(common.css)CSS 파일의 가장 아랫 부분에
							선언한다. 또한 미디어 타입의 코드 작성시 1탭의 들여쓰기는
							허용한다.
						</p>
						<pre class="syntax brush-css">
...
/* Print */
@media print {
	#header {display:none;}
}</pre
						>
						<h5>미디어 타입의 종류</h5>
						<ul class="list-type1">
							<li>all : 모든 출력장치</li>
							<li>aural : 음성출력</li>
							<li>braille : 점자 출력</li>
							<li>handheld : 포켓, 모바일</li>
							<li>print : 인쇄</li>
							<li>projection : 투사 장치</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- //CSS 코드 작성 규칙 -->
		</div>
		<span class="btn-top"><a href="#devWrap">&uarr; 위로</a></span>
	</div>
</template>

<script>
export default {
	name: 'worklist',
};
</script>
<style lang="scss">
@import './scss/style.scss';
</style>
