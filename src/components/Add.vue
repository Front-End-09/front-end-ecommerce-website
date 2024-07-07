<template>
    <form action="/uploadProfilePicture"
        enctype="multipart/form-data" method="POST">
        <span>Upload Profile Picture:</span>
        <input type="file" name="mypic" required/> <br>
        <input type="submit" value="submit">
    </form>
</template>
