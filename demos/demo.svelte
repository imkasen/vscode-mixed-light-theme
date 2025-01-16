<script>
    let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }

    function reset() {
        count = 0;
    }
</script>

<style>
    .counter {
        text-align: center;
        font-family: Arial, sans-serif;
        margin-top: 50px;
    }

    .count {
        font-size: 2em;
        margin: 20px 0;
    }

    button {
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }

    button:hover {
        background-color: #0056b3;
    }

    .reset-button {
        background-color: #dc3545;
    }

    .reset-button:hover {
        background-color: #a71d2a;
    }
</style>

<div class="counter">
    <h1>Counter App</h1>
    <div class="count">{count}</div>
    <div>
        <button on:click={increment}>Increment</button>
        <button on:click={decrement}>Decrement</button>
    </div>
    <button class="reset-button" on:click={reset}>Reset</button>
</div>
