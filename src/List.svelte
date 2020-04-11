<script>
  import { append } from './list'

  let textValue = ""
  let items = [ ]

function onClick() {
  items = append(items, textValue)
  textValue = ""
}
</script>

<input type="text" bind:value={textValue}/>
<button on:click={onClick}>Add</button>

<ul>
  {#each items as item}
  <li>{item.description}</li>
  {/each}
</ul>

<style media="screen">

</style>
