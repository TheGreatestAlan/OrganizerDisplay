<template>
	<div>
		<b-jumbotron>
			<template slot="lead">
				{{goalItems.goalItems}}
			</template>
		{{goalItems}}
		</b-jumbotron>
	</div>
</template>

<script>
export default{
	props: {
		goalItems: Object
	}
}
</script>