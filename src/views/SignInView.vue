<template>
    <div class="signin">
        <h1>This is a Sign In page</h1>

        <form>

            <div class="form-group">
                <label for="email">Votre Email *</label>
                <input placeholder="sophie@example.com" type="email" id="email" required class="form-control">
                <label for="password">Votre mot de passe *</label>
                <input v-model="password" placeholder="Entrez votre mot de passe..." type="password" id="password" required class="form-control">
                
                <div class="requis">
                    <span :class="has_minimum_length ? 'has_required' : ''">atleast 8 chacters *</span>
                    <span :class="has_lowercase ? 'has_required' : ''">one lowercase letter *</span>
                    <span :class="has_uppercase ? 'has_required' : ''">one uppercase letter *</span>
                    <span :class="has_number ? 'has_required' : ''">One number *</span>
                    <span :class="has_special ? 'has_required' : ''">One special character *</span>
                </div>
                
            </div>

            <button type="submit" class="validation">Se connecter</button>
        </form>


    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            has_minimum_length: false,
            has_number: false,
            has_lowercase: false,
            has_uppercase: false,
            has_special: false
        }
    },
    watch: {
        password() {
            this.has_minimum_length = (this.password.length > 8);
            this.has_number = /\d/.test(this.password);
            this.has_lowercase = /[a-z]/.test(this.password);
            this.has_uppercase = /[A-Z]/.test(this.password);
            this.has_special = /(?=.*[!@#$%^&*])/.test(this.password);
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>

    .form-group {
        height: auto;
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
        margin-top: 20px;
        background-color: rgb(93, 193, 147);
        padding: 10px;
        cursor: pointer;
    }

    .requis {
        margin-top: 20px;
        display:flex;
        flex-direction: column;
        height: 180px;
        justify-content: space-evenly;
    }
    .has_required {
        color: #689868;
    }

</style>