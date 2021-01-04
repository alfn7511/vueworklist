<template>
	<div>
		<el-date-picker v-model="date" type="date" placeholder="Pick a day" />
		{{ form.checkbox }}
		<el-checkbox-group v-model="form.checkbox">
			<el-checkbox
				label="Online activities"
				value="1"
				name="type"
			></el-checkbox>
			<el-checkbox
				label="Promotion activities"
				value="2"
				name="type"
			></el-checkbox>
			<el-checkbox
				label="Offline activities"
				value="3"
				name="type"
			></el-checkbox>
			<el-checkbox
				label="Simple brand exposure"
				value="4"
				name="type"
			></el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			date: '2020-01-02',
			form: {
				checkbox: [],
			},
		};
	},
};
</script>
