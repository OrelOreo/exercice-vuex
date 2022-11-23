<template>
    <div class="signin">
        <h1>This is a Sign In page</h1>

        <form>

            <div class="form-group">
                <label for="email">Votre Email</label>
                <input placeholder="sophie@example.com" type="text" id="email" required class="form-control">
                <label for="password">Votre mot de passe</label>
                <input placeholder="Entrez votre mot de passe..." type="password" id="password" min="8" required class="form-control">
            </div>

        </form>

        <button class="validation">Se connecter</button>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

    .form-group {
        height: 200px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 30%;
        margin: 0 auto;

        .form-control {
            padding: 10px;

            &[type=text]:focus, &[type=password]:focus {
                outline: 1px solid #42b983;
            }
        }
    }

    .validation {
        margin-top: 15px;
        background-color: rgb(93, 193, 147);
        padding: 10px;
        cursor: pointer;
    }

</style>