<script>
export let answer='Shy';

let index = Math.floor(Math.random() * 2);

let src = `images/${answer}/${index}.png`;
</script>

<img src ={src} alt="img"/>

<style>
    img {
      width: 800px; 
      height: 800px;
      display: block; 
      margin: 0 auto; 
    }
</style>