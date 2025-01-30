<template>
    <div class="container mx-auto p-4">
        <main>
            <div class="mb-4">
                <input type="text" placeholder="Search help pages..." class="w-full p-2 border rounded">
                <button class="bg-blue-500 text-white p-2 rounded mt-2">Search</button>
            </div>
            <section>
                <h2 class="text-xl font-bold mb-2">Welcome to the Stack Overflow Help Center!</h2>
                <p>If you are unable to find the answer you need here, you can also search for or ask a question about
                    Stack Overflow on <a href="https://meta.stackoverflow.com" class="text-blue-500">Meta Stack
                        Overflow</a>!</p>
                <h3 class="text-lg font-bold mt-4">We have a <a href="https://stackoverflow.com/help"
                        class="text-blue-500">curated list of frequently asked questions</a>. Top FAQ questions include:
                </h3>
                <ul class="list-disc list-inside">
                    <li><a href="#" class="text-blue-500">What can I do when getting "We are no longer accepting
                            questions/answers from this account"?</a></li>
                    <li><a href="#" class="text-blue-500">How do I ask and answer homework questions?</a></li>
                    <li><a href="#" class="text-blue-500">Why did I gain/lose reputation? Can I audit my reputation
                            history?</a></li>
                    <li><a href="#" class="text-blue-500">"This question already has answers here" - but it does not.
                            What can I do when I think a question is not a duplicate?</a></li>
                </ul>
            </section>
            <section class="mt-4">
                <h3 class="text-lg font-bold">AI-assisted Generated Content Ban</h3>
                <p>Please be aware that all AI-assisted generated content (including ChatGPT) is currently banned. For
                    more information, see:</p>
                <ul class="list-disc list-inside">
                    <li><a href="#" class="text-blue-500">Why can't I use Artificial Intelligence tools to generate
                            answers?</a></li>
                    <li><a href="#" class="text-blue-500">Policy: Generative AI (e.g., ChatGPT) is banned</a></li>
                </ul>
            </section>
            <section class="mt-4">
                <h3 class="text-lg font-bold">Find out more about...</h3>
                <ul class="list-disc list-inside">
                    <li><a href="#" class="text-blue-500">What types of questions should I avoid asking?</a></li>
                    <li><a href="#" class="text-blue-500">Who are the site moderators, and what is their role?</a></li>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>
</script>

<style scoped>
.container {
    max-width: 800px;
}
</style>