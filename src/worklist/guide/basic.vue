<template>
	<div class="wrap-content guide">
		<h1 class="guide">기본정의</h1>
		<ul class="txt-type1">
			<li>폰트색상 : 기본(#666) 강조(#333 / #000)</li>
			<li>폰트 : 나눔고딕 0.875px/1.71(14px/24px)</li>
			<li>타이틀 및 소제목이상 : 나눔바른고딕</li>
			<li>
				링크 : 기본텍스트와 동일하게 표현, hover,focus시 underline (디자인에
				따라 예외처리)
			</li>
		</ul>
		<table class="tbl-guide">
			<thead>
				<tr>
					<th>구분</th>
					<th>색상</th>
					<th>코드</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>기본텍스트</td>
					<td><span class="block color1"></span></td>
					<td>#666666</td>
				</tr>
				<tr>
					<td>강조텍스트</td>
					<td><span class="block color2"></span></td>
					<td>#333333</td>
				</tr>
				<tr>
					<td>포인트칼라1</td>
					<td><span class="block color3"></span></td>
					<td>#173e35</td>
				</tr>
				<tr>
					<td>포인트칼라2</td>
					<td><span class="block color4"></span></td>
					<td>#c5b60e</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import '../scss/guide.scss';
export default {};
</script>
