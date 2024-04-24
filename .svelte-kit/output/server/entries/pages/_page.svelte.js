import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: "img.svelte-1qetggp{width:800px;height:800px;display:block;margin:0 auto}",
  map: '{"version":3,"file":"Main.svelte","sources":["Main.svelte"],"sourcesContent":["<script>\\nexport let answer=\'Shy\';\\n\\nlet index = Math.floor(Math.random() * 100);\\n\\nlet src = `./images/${answer}/${index}.png`;\\n<\/script>\\n\\n<img src ={src} alt=\\"img\\"/>\\n\\n<style>\\n    img {\\n      width: 800px; \\n      height: 800px;\\n      display: block; \\n      margin: 0 auto; \\n    }\\n</style>"],"names":[],"mappings":"AAWI,kBAAI,CACF,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CAAC,CAAC,IACZ"}'
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { answer = "Shy" } = $$props;
  let index = Math.floor(Math.random() * 100);
  let src = `./images/${answer}/${index}.png`;
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css$2);
  return `<img${add_attribute("src", src, 0)} alt="img" class="svelte-1qetggp">`;
});
const css$1 = {
  code: ".quiz-button.svelte-1758huu{margin-right:10px;background-color:#ffffff;color:#333333;border:2px solid #666666;border-radius:5px;padding:10px 20px;font-size:16px;cursor:pointer;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:background-color 0.3s, border-color 0.3s, color 0.3s;border-radius:20px;padding:15px 25px}.quiz-button.svelte-1758huu:hover{background-color:#f0f0f0}.quiz-button.svelte-1758huu:disabled{opacity:0.6;cursor:not-allowed}",
  map: '{"version":3,"file":"Quiz.svelte","sources":["Quiz.svelte"],"sourcesContent":["<script>\\nexport let label;\\nexport let id;\\nexport let onclick;\\nexport let disabledbutton;\\n<\/script>\\n<button class=\\"quiz-button\\" on:click={onclick} id=\\"{id}\\" disabled={disabledbutton}>{label}</button>\\n\\n<style>\\n  .quiz-button {\\n    margin-right: 10px;\\n    background-color: #ffffff; /* Light background color */\\n    color: #333333; /* Text color */\\n    border: 2px solid #666666; /* Border color */\\n    border-radius: 5px; /* Rounded corners */\\n    padding: 10px 20px; /* Padding */\\n    font-size: 16px; /* Font size */\\n    cursor: pointer; /* Cursor style */\\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */\\n    transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Smooth transition */\\n    border-radius: 20px;\\n    padding: 15px 25px;\\n  }\\n\\n  .quiz-button:hover {\\n    background-color: #f0f0f0; /* Lighter background color on hover */\\n  }\\n\\n  .quiz-button:disabled {\\n    opacity: 0.6; /* Reduced opacity for disabled state */\\n    cursor: not-allowed; /* Change cursor for disabled state */\\n  }\\n\\n</style>"],"names":[],"mappings":"AASE,2BAAa,CACX,YAAY,CAAE,IAAI,CAClB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,CAAC,YAAY,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,IAAI,CAChE,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CAAC,IAChB,CAEA,2BAAY,MAAO,CACjB,gBAAgB,CAAE,OACpB,CAEA,2BAAY,SAAU,CACpB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,WACV"}'
};
const Quiz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { id } = $$props;
  let { onclick } = $$props;
  let { disabledbutton } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  if ($$props.disabledbutton === void 0 && $$bindings.disabledbutton && disabledbutton !== void 0)
    $$bindings.disabledbutton(disabledbutton);
  $$result.css.add(css$1);
  return `<button class="quiz-button svelte-1758huu"${add_attribute("id", id, 0)} ${disabledbutton ? "disabled" : ""}>${escape(label)}</button>`;
});
const css = {
  code: "body{margin:0;padding:0;background-color:#18181b;font-family:'Comic Sans MS', cursive}p.svelte-1o1v05z{font-size:x-large}.container.svelte-1o1v05z{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding-bottom:100px}.image-div.svelte-1o1v05z{margin-bottom:20px}.options-row.svelte-1o1v05z{display:flex;justify-content:center;margin:0 10px;margin-bottom:10px;margin-right:10px}#correctanswer.svelte-1o1v05z{color:green}#incorrectanswer.svelte-1o1v05z{color:red}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import Main from '../Main.svelte';\\n    import Quiz from '../Quiz.svelte';\\n\\n    let answerarr = ['Contemplative','Curious','Judging','Shy'];\\n    let answerindex = Math.floor(Math.random() * 4);\\n    let correct = false;\\n    let displayanswer = false;\\n\\n    function CheckAnswer(id) {\\n        if (answerindex == id){\\n            correct = true;\\n        }\\n        displayanswer = true;\\n    }\\n\\n    \\n<\/script>\\n\\n<div class=\\"container\\">\\n    <div class='image-div'>\\n    <Main answer={answerarr[answerindex]}/>\\n\\n    </div>\\n\\n    <div class=\\"options-row\\">\\n        <Quiz id=0 label='Contemplative' onclick={()=>CheckAnswer(0)} disabledbutton={displayanswer}/>\\n        <Quiz id=1 label='Curious' onclick={()=>CheckAnswer(1)} disabledbutton={displayanswer}/>\\n    </div>\\n    <div class=\\"options-row\\">\\n        <Quiz id=2 label='Judging' onclick={()=>CheckAnswer(2)} disabledbutton={displayanswer}/>\\n        <Quiz id=3 label='Shy' onclick={()=>CheckAnswer(3)} disabledbutton={displayanswer}/>\\n    </div>\\n    <div>\\n    {#if displayanswer}\\n        {#if correct}\\n            <p id=\\"correctanswer\\">Correct!</p>\\n        {:else}\\n            <p id=\\"incorrectanswer\\">Incorrect, correct option is {answerarr[answerindex]}</p>\\n        {/if}\\n    {/if}\\n    </div>\\n</div>\\n\\n<style>\\n\\n    :global(body) {\\n        margin: 0;\\n        padding: 0;\\n        background-color: #18181b; \\n        font-family: 'Comic Sans MS', cursive;\\n    }\\n\\n    p{\\n        font-size: x-large;\\n    }\\n\\n\\n    .container {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        height: 100vh;\\n        padding-bottom: 100px;\\n\\n    }\\n    .image-div{\\n        margin-bottom: 20px;\\n    }\\n\\n    .options-row {\\n        display: flex;\\n        justify-content: center;\\n        margin: 0 10px;\\n        margin-bottom: 10px;\\n        margin-right: 10px;\\n    }\\n\\n    #correctanswer{\\n        color: green;\\n    }\\n\\n    #incorrectanswer{\\n        color: red;\\n    }\\n</style>\\n"],"names":[],"mappings":"AA8CY,IAAM,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,eAAe,CAAC,CAAC,OAClC,CAEA,gBAAC,CACG,SAAS,CAAE,OACf,CAGA,yBAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,KAAK,CACb,cAAc,CAAE,KAEpB,CACA,yBAAU,CACN,aAAa,CAAE,IACnB,CAEA,2BAAa,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAClB,CAEA,6BAAc,CACV,KAAK,CAAE,KACX,CAEA,+BAAgB,CACZ,KAAK,CAAE,GACX"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answerarr = ["Contemplative", "Curious", "Judging", "Shy"];
  let answerindex = Math.floor(Math.random() * 4);
  let correct = false;
  let displayanswer = false;
  function CheckAnswer(id) {
    if (answerindex == id) {
      correct = true;
    }
    displayanswer = true;
  }
  $$result.css.add(css);
  return `<div class="container svelte-1o1v05z"><div class="image-div svelte-1o1v05z">${validate_component(Main, "Main").$$render($$result, { answer: answerarr[answerindex] }, {}, {})}</div> <div class="options-row svelte-1o1v05z">${validate_component(Quiz, "Quiz").$$render(
    $$result,
    {
      id: "0",
      label: "Contemplative",
      onclick: () => CheckAnswer(0),
      disabledbutton: displayanswer
    },
    {},
    {}
  )} ${validate_component(Quiz, "Quiz").$$render(
    $$result,
    {
      id: "1",
      label: "Curious",
      onclick: () => CheckAnswer(1),
      disabledbutton: displayanswer
    },
    {},
    {}
  )}</div> <div class="options-row svelte-1o1v05z">${validate_component(Quiz, "Quiz").$$render(
    $$result,
    {
      id: "2",
      label: "Judging",
      onclick: () => CheckAnswer(2),
      disabledbutton: displayanswer
    },
    {},
    {}
  )} ${validate_component(Quiz, "Quiz").$$render(
    $$result,
    {
      id: "3",
      label: "Shy",
      onclick: () => CheckAnswer(3),
      disabledbutton: displayanswer
    },
    {},
    {}
  )}</div> <div>${displayanswer ? `${correct ? `<p id="correctanswer" class="svelte-1o1v05z" data-svelte-h="svelte-1wyv465">Correct!</p>` : `<p id="incorrectanswer" class="svelte-1o1v05z">Incorrect, correct option is ${escape(answerarr[answerindex])}</p>`}` : ``}</div> </div>`;
});
export {
  Page as default
};
