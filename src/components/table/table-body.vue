<script setup lang="ts">
import { useEmployeeStore } from '../../stores/employee';

const employees = useEmployeeStore()
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(employee, index) in employees.perPage" :key="index">
                <td>{{ employee.id }}</td>
                <td>{{ employee.first_name }}</td>
                <td>{{ employee.last_name }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.gender }}</td>
                <td>
                    <button class="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button> |
                    <button class="btn btn-outline-danger"><i class="fa-solid fa-delete-left"></i></button> |
                    <router-link class="btn btn-outline-secondary" :to="{name: 'profile', params: {id: employee.id}}">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </router-link>
                </td>
            </tr>   
        </tbody>
    </table>
</template>