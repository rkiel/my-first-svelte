<script>
  import trim from 'lodash/trim'
  import concat from 'lodash/concat'
  import sortBy from 'lodash/sortBy'

  let textValue = ""
  let items = [ ]

function onClick() {
  const value = trim(textValue)
  if (value.length > 0) {
    items = sortBy(concat(items, {description: value}), ['description'])
    textValue = ""
  }
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
