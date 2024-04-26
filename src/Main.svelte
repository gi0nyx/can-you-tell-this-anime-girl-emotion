<script>
export let answer='Shy';

let index = Math.floor(Math.random() * 100);

let src = `images/${answer}/${index}.png`;
</script>

<img src ={src} alt="img"/>

<style>
    img {
      width: 600px; 
      height: 600px;
      display: block; 
      margin: 0 auto; 
    }

    @media (max-width: 600px) {
    img {
      width: 90%;
      height: 90%;
    }
  }

</style>