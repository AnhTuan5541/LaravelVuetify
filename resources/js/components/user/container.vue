<template>
    <div>
        <v-data-table
            expand-icon
            :headers="headers"
            :items="users"
            :items-per-page="5"

            class="elevation-0"
        >
            <template slot="no-data">
                No users found
            </template>
        </v-data-table>
    </div>
  
</template>

<script>
  export default {
    data () {
        return {
            headers: [
                { text: 'Id', value: 'id' },    
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Email', value: 'email' },
            ],
        }
    },
    computed: {
        users: {
            get() {
                return this.$store.state.user.users.data
            }
        }
    },
    created() {
        this.$store.dispatch('product/getUsers');
    }
  }
</script>