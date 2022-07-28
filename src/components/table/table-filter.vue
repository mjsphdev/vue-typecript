<script setup lang="ts">
import { useEmployeeStore } from '../../stores/employee';

const employees = useEmployeeStore()
</script>
<template>
    <small><em>(Might have a logic error while using filter.)</em></small>
    <div class="col-md-2 mb-5">
        <label class="font-semibold">Show 
        <select v-model="employees.filterSize" @change="employees.filterPage()" class="form-select form-select-sm " aria-label=".form-select-sm example">
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>           
        </label>    
    </div>
</template>