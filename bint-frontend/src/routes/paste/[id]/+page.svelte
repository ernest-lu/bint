<script>
    import { Button } from 'flowbite-svelte';
    import { CodeBlock } from '@skeletonlabs/skeleton';

    export let data;
</script>

<main>
    <CodeBlock 
        code={data.content}
        linenumbers="true"
        color="black"
    />
    <Button href="/">Back</Button>
</main>
