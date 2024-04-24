<script>
    import Main from '../Main.svelte';
    import Quiz from '../Quiz.svelte';

    let answerarr = ['Contemplative','Curious','Judging','Shy'];
    let answerindex = Math.floor(Math.random() * 4);
    let correct = false;
    let displayanswer = false;

    function CheckAnswer(id) {
        if (answerindex == id){
            correct = true;
        }
        displayanswer = true;
    }

    
</script>

<div class="container">
    <div class='image-div'>
    <Main answer={answerarr[answerindex]}/>

    </div>

    <div class="options-row">
        <Quiz id=0 label='Contemplative' onclick={()=>CheckAnswer(0)} disabledbutton={displayanswer}/>
        <Quiz id=1 label='Curious' onclick={()=>CheckAnswer(1)} disabledbutton={displayanswer}/>
    </div>
    <div class="options-row">
        <Quiz id=2 label='Judging' onclick={()=>CheckAnswer(2)} disabledbutton={displayanswer}/>
        <Quiz id=3 label='Shy' onclick={()=>CheckAnswer(3)} disabledbutton={displayanswer}/>
    </div>
    <div>
    {#if displayanswer}
        {#if correct}
            <p id="correctanswer">Correct!</p>
        {:else}
            <p id="incorrectanswer">Incorrect, correct option is {answerarr[answerindex]}</p>
        {/if}
    {/if}
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
        padding-bottom: 100px;

    }
    .image-div{
        margin-bottom: 20px;
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
</style>
