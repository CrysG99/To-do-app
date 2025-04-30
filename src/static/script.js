document.getElementById('todo-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
        const res = await fetch('/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                task: form.task.value,
                priority: form.priority.value
            })
        })
        if (!res.ok) {
            return console.log('Error adding task')
        }

        console.log('Task added')
    } catch (err) {
        console.log(err)
    }
});

