<script>
    import { paste_document } from "../firebase";
    import { Heading, Button, Textarea } from "flowbite-svelte";
    let text_data = "";
    let id_of_paste = "";
    let post_message = "";

    async function paste_and_process() {
        let resp = await paste_document(text_data);
        let data = resp.data;

        id_of_paste = data.content;
        if (data.message === "success") {
            post_message = "success, posted to: " + id_of_paste;
        } else {
            post_message = "post already exists at id: " + id_of_paste;
        }
        return;
    }
</script>

<main>
    <Heading>Bint</Heading>

    <Textarea bind:value={text_data} rows="35" font-family="monospace" />

    <p>text preview: {text_data}</p>
    <Button on:click={paste_and_process}>Submit Paste</Button>
    <p>{post_message}</p>
</main>
