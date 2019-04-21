<template>
    <div id="projects">
        <Diamond msg="Projects"/>
        <!-- <h1>PROJECTS</h1>
        <hr> -->
        <div class="row">
        <div class="col-md-6" v-bind:key="project.id" v-for="project in projects"> 
            <ProjectCard v-bind:project="project"/>
        </div>
        </div>
    </div>
</template>


<script>
import ProjectCard from './project-card.vue'
import Diamond from './Diamond.vue'

export default {
    name: 'Projects',
    components: {
        ProjectCard,
        Diamond
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title:'Gedcom Parser',
                    tools: 'C, JavaScript, Node.js, MySQL, HTML/CSS',
                    url: 'https://github.com/RyanGundu/Genealogy-API',
                    message: 'This project was completed throughout the span of a semester. The GEDCOM file parser was made with C, and front end with HTML and CSS. A Node.js server was used to send data to a MySQL DBMS.',
                    img: 'https://ryangundu.github.io/images/cCode.png',
                    link: ''
                },
                {
                    id: 2,
                    title:'Word Unscrambler',
                    tools: 'HTML/CSS, TypeScript, Angular 6',
                    url: 'https://github.com/RyanGundu/word_unscrambler',
                    message: 'The Word Unscrambler is a tool that generates all possible English words, given a set of letters. It displays the score of each word which is calculated using the scrabble standard scoring system.',
                    img: 'https://ryangundu.github.io/images/words.jpeg',
                    link: 'https://ryangundu.github.io/word_unscrambler/'
                },
                {
                    id: 3,
                    title:'Tool Trader',
                    tools: 'HTML/CSS, TypeScript, Angular 6, Firebase',
                    url: 'https://github.com/RyanGundu/toolTrader',
                    message: 'Tool Trader is a platform made for selling, renting and trading tools. The front end was constructed with Angular 6 and integrated with Firebase for storing user data and managing authentication. Non registered users may only view items, login is required for posting.',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1024px-Circle-icons-tools.svg.png',
                    link: ''
                },
                {
                    id: 4,
                    title:'Pandanus Kitchens',
                    tools: 'HTML/CSS, TypeScript, Node.js, Angular 6',
                    url: '',
                    message: 'This website is made for Pandanus Kitchens. It is designed based on the client’s given objectives and requirements. It follows the theme of the company logo and is simple to navigate through. It offers an organized gallery of their completed work and allows clients to contact via email if needed.',
                    img: 'https://ryangundu.github.io/images/pandanusLOGO.png',
                    link: 'http://www.pandanuskitchens.ca/index.html#/'
                },
                {
                    id: 5,
                    title:'Fortnite Comparison Tool',
                    tools: 'HTML/CSS, JavaScript, Node.js',
                    url: '',
                    message: 'The fortnite comparison web application displays a user’s overall statistics in fortnite. An additional feature allows you to compare statistics between two players using a custom scoring system. The data is received in A JSON format using the fortnite tracker API.',
                    img: 'https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_brw/public/field/image/2018/03/fortnite-windowscentral-screen.jpg?itok=ItVKiZoP',
                    link: 'https://fortnite-comparison.herokuapp.com'
                },

            ]
        }
    }
}
</script>


<style scoped>
#projects {
    background-color: 	#dfe3ee;
    background-color: #EEEFEF;
    overflow-x: hidden;
}
.row {
    max-width: 1000px;
    margin: 0 auto;
    max-height: 800px;
    overflow-y: scroll;
}
</style>
