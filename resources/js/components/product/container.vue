<template>
    <div>
        <v-data-table
            expand-icon
            :headers="headers"
            :items="products"
            :items-per-page="5"

            class="elevation-0"
        >
            <template slot="no-data">
                No products found
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
                { text: 'Price', value: 'price' },
            ],
        }
    },
    computed: {
        products: {
            get() {
                return this.$store.state.product.products.data
            }
        }
    },
    created() {
        this.$store.dispatch('product/getProducts');
    }
  }
</script>