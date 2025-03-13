<template>
    <div>
        <section id="single_project" v-if="project">
            <div class="container">
                <a href="/#portfolio_section" class="btn btn-sm btn-success mb-2">Back</a>
                <div class="row">
                    <div class="col-md-6">
                        <img :src="project.image" alt="" class="w-100">
                    </div>
                    <div class="col-md-6">
                        <h2>{{ project.name }}</h2>
                        <p>{{ project.description }}</p>
                        <p>Technologies: <span class="badge bg-primary mx-1" v-for="feature in project.technologies" :key="feature">{{ feature }}</span></p>
                        <p>Features: <span class="badge bg-success mx-1" v-for="feature in project.features" :key="feature">{{ feature }}</span></p>
                      
                        <p>Live Link : <a :href="project.liveLink" class="btn-link" target="_blank">Have a tour.</a></p>
                       
                    </div>
                </div>
              
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

    .btn-link{
        color: teal!important;
        text-decoration: none;
    }
</style>