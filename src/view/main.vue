<template>
	<div>
		<el-date-picker v-model="date" type="date" placeholder="Pick a day">
		</el-date-picker>
	</div>
</template>

<script>
export default {
	data() {
		return {
			date: '2020-01-02',
		};
	},
};
</script>
