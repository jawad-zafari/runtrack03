<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job 04-utilisateurs</title>
    <style>
        body { font-family: Tahoma, sans-serif; padding: 20px; background-color: #f4f4f4; }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            background: white; 
            margin-top: 20px; 
        }
        th, td { 
            padding: 10px; 
            border: 1px solid #ddd; 
            text-align: center; 
        }
        th { background-color: #333; color: white; }
        #update-btn {
            padding: 10px 20px;
            font-size: 16px;
            background-color:#00a2ffff; 
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        
        #update-btn:hover { background-color:   #0079cfff; }
    </style>
</head>
<body>
<h1>liste des utilisateurs</h1>
<button id="update-btn">Mise à jour</button>
<hr>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>prenom</th>
            <th>nom</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody id="users-tb">
    </tbody>
</table>
<script src="script.js"></script>
</body>
</html>