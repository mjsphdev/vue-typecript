<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee';
import Table from '@/components/table/table-body.vue';
import Filter from '@/components/table/table-filter.vue';
import Pagination from '@/components/table/table-pagination.vue';

const employees = useEmployeeStore()

</script>
<template>
    <div class="container">
        <h1 class="fw-light mt-4">Employee</h1>
        <div class="card shadow-sm p-5 mt-5 mb-5 bg-body rounded">
            <Filter />
            <div class="table-reponsive">
                <Table />
            </div>
           <Pagination />
            
        </div>   
    </div>
</template>