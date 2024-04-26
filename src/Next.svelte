<script>


function onClickNext(){
   

   
    location.reload();

}

</script>
<button class="next-button" on:click={onClickNext}>Next</button>

<style>
  .next-button {
    margin-right: 10px;
    background-color: #ffffff; 
    color: #333333; 
    border: 2px solid #666666; 
    border-radius: 5px; 
    padding: 10px 20px;
    font-size: 16px; 
    cursor: pointer; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
    transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Smooth transition */
    border-radius: 20px;
    padding: 15px 25px;
  }

  .next-button:hover {
    background-color: #f0f0f0; /* Lighter background color on hover */
  }

  .next-button:disabled {
    opacity: 0.6; /* Reduced opacity for disabled state */
    cursor: not-allowed; /* Change cursor for disabled state */
  }

</style>