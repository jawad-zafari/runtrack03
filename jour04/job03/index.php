<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Pokemon Filter</title>
</head>
<body>

    <h2>Pokemon Filter</h2>

    <form id="filterForm">
        <label for="id">ID:</label>
        <input type="number" id="id" name="id"><br><br>

        <label for="nom">Name:</label>
        <input type="text" id="nom" name="nom"><br><br>

        <label for="type">Type:</label>
        <select id="type" name="type">
            <option value="">All</option>
            <option value="Grass">Grass</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Rock">Rock</option>
            <option value="Psychic">Psychic</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
        </select><br><br>

        <input type="button" id="filter" value="filtrer">
    </form>

    <div id="results"></div>

    <script src="script.js"></script>
</body>
</html>