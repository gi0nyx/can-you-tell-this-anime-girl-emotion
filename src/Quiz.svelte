<script>
export let label;
export let id;
export let onclick;
export let disabledbutton;
</script>
<button class="quiz-button" on:click={onclick} id="{id}" disabled={disabledbutton}>{label}</button>

<style>
  .quiz-button {
    margin-right: 10px;
    background-color: #ffffff; /* Light background color */
    color: #333333; /* Text color */
    border: 2px solid #666666; /* Border color */
    border-radius: 5px; /* Rounded corners */
    padding: 10px 20px; /* Padding */
    font-size: 16px; /* Font size */
    cursor: pointer; /* Cursor style */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
    transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Smooth transition */
    border-radius: 20px;
    padding: 15px 25px;
  }

  .quiz-button:hover {
    background-color: #f0f0f0; /* Lighter background color on hover */
  }

  .quiz-button:disabled {
    opacity: 0.6; /* Reduced opacity for disabled state */
    cursor: not-allowed; /* Change cursor for disabled state */
  }

</style>