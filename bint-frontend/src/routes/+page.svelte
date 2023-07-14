<script>
    import { paste_document } from "../firebase";
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
    <h1>Bint</h1>

    <input bind:value={text_data} />

    <p>text preview: {text_data}</p>
    <button on:click={paste_and_process}>Submit Paste</button>
    <p>{post_message}</p>
</main>
