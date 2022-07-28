<script setup lang="ts">
import { useEmployeeStore } from '../../stores/employee';

const employees = useEmployeeStore()
</script>

<template>
    <div class="d-flex justify-content-between">
        <div>
            <p class="fw-semibold fst-italic">Showing {{ employees.prevValue+1 }} of {{ employees.newValue }} of {{ employees.dataLength }}</p>
        </div>
        <div>
            <button class="btn btn-outline-success" :class="[employees.currentPage == 1  ? 'disabled' : '']" @click="employees.prev"><i class="fa-solid fa-angles-left"></i></button>
            <span v-for="(page, index) in employees.perPagination" :key="index">
                <button class="btn" 
                    :class="[employees.currentPage == page ? 'btn-success text-light' : 'btn-outline-success']" 
                    @click="employees.changePage(page)">
                    {{ page }}
                </button>
            </span>
            <button class="btn btn-outline-success" :class="[employees.currentPage == employees.totalPage ? 'disabled' : '']" @click="employees.next"><i class="fa-solid fa-angles-right"></i></button>
        </div>         
    </div>
</template>