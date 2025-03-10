<template>
    <div>
        <section id="single_project" >
            <div class="container">
                {{ project }}
            </div>
        </section>
        
    </div>
</template>

<script setup>
    const { PROJECTS } = useDummyData();
    const project = ref(null);


    onMounted(()=>{
      project.value = PROJECTS.find((p) => p.slug == useRoute().params.slug);
    })
</script>

<style lang="scss" scoped>
    #single_project{
        margin-top: 80px;
    }
</style>