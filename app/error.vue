<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

const props = withDefaults(defineProps<Props>(), {
  error: { statusCode: 500, message: 'An unexpected error occurred' },
});

const route = useRoute();

const errorDetails = computed(() => {
  switch (props.error.statusCode) {
    case 404: {
      return {
        title: 'Page Not Found',
        description:
          'The page you are looking for might have been removed or does not exist.',
        icon: 'heroicons:exclamation-triangle',
      };
    }

    case 500: {
      return {
        title: 'Server Error',
        description: 'Something went wrong on our end. Please try again later.',
        icon: 'heroicons:x-circle',
      };
    }

    default: {
      return {
        title: 'Unexpected Error',
        description: props.error.message || 'An unexpected error occurred',
        icon: 'heroicons:warning-triangle',
      };
    }
  }
});
</script>

<template>
  <UContainer
    class="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-neutral-900"
    ><UCard
      class="w-full p-6 text-center shadow-lg rounded-xl max-w-md"
      :ui="{
        base: 'bg-white dark:bg-neutral-800',
        ring: 'ring-1 ring-neutral-200 dark:ring-neutral-700',
        divide: 'divide-y divide-neutral-200 dark:divide-neutral-700',
      }"
      ><div class="flex flex-col items-center space-y-4">
        <UIcon
          class="w-16 h-16 text-red-500 dark:text-red-400"
          :name="errorDetails.icon"
        />
        <div>
          <h1
            class="text-2xl font-bold text-neutral-900 mb-2 dark:text-neutral-100"
          >
            {{ errorDetails.title }}
          </h1>
          <p class="text-neutral-600 dark:text-neutral-400">
            {{ errorDetails.description }}
          </p>
        </div>
        <div class="flex pt-4 space-x-4">
          <UButton to="/" color="primary" variant="solid" icon="heroicons:home">
            Go to Home
          </UButton>
        </div>
      </div></UCard
    ></UContainer
  >
</template>
