<script setup lang="ts">
    import AppHeader from '@/components/AppHeader.vue'
    import { onMounted, ref } from 'vue'
    import { getAuth, onAuthStateChanged } from 'firebase/auth'
    import { useUserStore } from '@/stores/user'

    const userStore = useUserStore()

    const isLoading = ref<boolean>(true)

    onMounted(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                userStore.userId = user.uid
            } else {
            userStore.userId = ''
            }
        isLoading.value = false
        })
    })
</script>

<template>
    <app-progress v-if="isLoading" />
    <div v-else class="container">
        <AppHeader />
        <div class="content"><RouterView /></div>
    </div>
</template>