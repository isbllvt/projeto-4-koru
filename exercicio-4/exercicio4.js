// Lista de tarefas com informações como id, título, status de conclusão e prioridade
const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// 1. Encontrando o índice da tarefa com o título "Participar da reunião"
const meetingIndex = tasks.findIndex(task => task.title === "Participar da reunião");
console.log("Índice da tarefa 'Participar da reunião':", meetingIndex);

// 2. Verificando se existe pelo menos uma tarefa de alta prioridade
const hasHighPriorityTask = tasks.some(task => task.priority === "alta");
console.log("\nExiste pelo menos uma tarefa de alta prioridade:", hasHighPriorityTask);

// 3. Verificando se todas as tarefas estão concluídas
const allTasksCompleted = tasks.every(task => task.completed);
console.log("\nTodas as tarefas concluídas:", allTasksCompleted);

// 4. Encontrando tarefas incompletas e com alta prioridade
const incompleteHighPriorityTasks = tasks.filter(
    task => !task.completed && task.priority === "alta"
);
console.log("\nTarefas incompletas de alta prioridade:", incompleteHighPriorityTasks);

// DESAFIO

// a. Encontrar o índice da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log("\nÍndice da primeira tarefa incompleta:", firstIncompleteIndex);

// b. Verificar se existe alguma tarefa de baixa prioridade que esteja completa
const hasLowPriorityCompleted = tasks.some(task => task.priority === "baixa" && task.completed);
console.log("\nExiste tarefa de baixa prioridade completa:", hasLowPriorityCompleted);

// c. Verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityIncomplete = tasks
    .filter(task => task.priority === "alta")
    .every(task => !task.completed);
console.log("\nTodas as tarefas de alta prioridade estão incompletas:", allHighPriorityIncomplete);

// d. Encontrar índice da tarefa com id = 10 (lidar com caso inexistente)
const indexTask10 = tasks.findIndex(task => task.id === 10);
if (indexTask10 === -1) {
    console.log("\nTarefa com ID 10 não encontrada.");
} else {
    console.log("\nÍndice da tarefa com ID 10:", indexTask10);
}
