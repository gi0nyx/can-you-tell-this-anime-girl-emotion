<script>
    import Main from '../Main.svelte';
    import Quiz from '../Quiz.svelte';
    import Next from '../Next.svelte';
    import { onMount, onDestroy } from 'svelte';

    let answerarr = ['Contemplative','Curious','Judging','Shy'];
    let answerindex = Math.floor(Math.random() * 4);
    let correct = false;
    let displayanswer = false;
    let streak = 0;
    let background_colors = ['#ffffff','#ffffff','#ffffff','#ffffff'];

    function CheckAnswer(id) {
        if (answerindex == id){
            background_colors[id] = '#00FF00';
            correct = true;
            streak++;
        }else{
            background_colors[id] = '#FF0000';
            background_colors[answerindex] = '#00FF00';
            correct=false;
            streak = 0;
        }
        displayanswer = true;
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('streak', streak);
        }
    }


    let answerTextHeight = 0;

    onMount(() => {
       
        if (displayanswer) {
            // Use the height of the correct/incorrect answer text
            const answerElement = document.getElementById(correct ? 'correctanswer' : 'incorrectanswer');
            if (answerElement) {
                answerTextHeight = answerElement.clientHeight;
            }
        }
    });

    onDestroy(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('streak');
        }
    });

    if (typeof localStorage !== 'undefined') {
        streak = localStorage.getItem('streak') || 0;
    }


    if (typeof window !== 'undefined') {
        window.addEventListener('beforeunload', () => {
            if (!displayanswer) {
                streak = 0;
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('streak', streak);
                }
            }
        });
    }

    
</script>



<div class="container">

    <div class="streak-display">
        <p>Streak: {streak}</p>
    </div>


    <div class='image-div'>
    <Main answer={answerarr[answerindex]}/>

    </div>

    <div class="answer-container" style="height: {answerTextHeight}px;">
        {#if displayanswer}
            {#if correct}
                <p id="correctanswer">Correct!</p>
            {:else}
                <p id="incorrectanswer">Incorrect, correct option is {answerarr[answerindex]}</p>
            {/if}
        {/if}
        </div>

    <div class="options-row">
        <Quiz background_color={background_colors[0]} id=0 label='Contemplative' onclick={()=>CheckAnswer(0)} disabledbutton={displayanswer}/>
        <Quiz background_color={background_colors[1]} id=1 label='Curious' onclick={()=>CheckAnswer(1)} disabledbutton={displayanswer}/>
    </div>
    <div class="options-row">
        <Quiz background_color={background_colors[2]} id=2 label='Judging' onclick={()=>CheckAnswer(2)} disabledbutton={displayanswer}/>
        <Quiz background_color={background_colors[3]} id=3 label='Shy' onclick={()=>CheckAnswer(3)} disabledbutton={displayanswer}/>
    </div>

    <div class="options-row">
        <Next/>
    </div>

    
    
</div>

<style>


    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #18181b; 
        font-family: 'Comic Sans MS', cursive;
    }

    p{
        font-size: x-large;
    }


    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding-bottom: 0px;

    }
    .image-div{
        margin-bottom: 0px;
    }

    .options-row {
        display: flex;
        justify-content: center;
        margin: 0 10px;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    #correctanswer{
        color: green;
    }

    #incorrectanswer{
        color: red;
    }

    .answer-container{
        margin-bottom: 75px;
    }

    .streak-display {
        position: absolute;
        top: 20px;
        left: 20px;
        color: white;
        font-size: 20px;
    }
</style>
