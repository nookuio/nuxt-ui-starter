<script
  setup
  lang="ts">
const features = [
  {
    title: 'Visual Editor',
    description: 'Design your UI with our intuitive editor',
    icon: 'i-heroicons-cursor-arrow-rays'
  },
  {
    title: 'Tailwind CSS',
    description: 'Style and customize with Tailwind CSS',
    icon: 'i-heroicons-paint-brush'
  },
  {
    title: 'Workflow Builder',
    description: 'Add logic with the visual workflow builder',
    icon: 'i-heroicons-adjustments-horizontal'
  },
  {
    title: 'Connectivity',
    description: 'Connect to any database, services and APIs',
    icon: 'i-heroicons-link'
  }
];
const communityLink = 'https://discord.com/invite/SswP243maG';
</script>

<template>
  <UContainer class="flex flex-col justify-center items-center py-20 bg-default">
    <div class="mx-auto text-center max-w-3xl space-y-16">
      <!-- Logo and Headline -->
      <div class="space-y-6">
        <div class="flex justify-center">
          <div class="bg-neutral-900 p-1 rounded-lg shadow-lg overflow-hidden">
            <img
              class="w-[60px] h-[60px] rounded-lg object-cover"
              src="https://nooku.io/favicon.ico"
              alt="Image" >
          </div>
        </div>
        <div class="space-y-4">
          <h1 class="text-5xl font-bold text-indigo-400">Welcome to Nooku</h1>
          <p class="text-lg text-neutral-400 mx-auto max-w-2xl">
            The next-generation low-code IDE for building modern web applications with ease and flexibility
          </p>
        </div>
      </div>
      <!-- Features Grid -->
      <div class="grid gap-6 md:grid-cols-2">
        <UCard
          v-for="(feature, currentIndex) in features"
          :key="feature?.title"
          class="transition-colors duration-300 shadow-md hover:bg-neutral-800/80"
          variant="subtle">
          <div class="flex items-start gap-4 p-2">
            <div class="bg-indigo-600/20 p-3 rounded-xl flex justify-center items-center border border-indigo-500/10">
              <UIcon
                class="text-indigo-400 text-xl"
                :name="feature?.icon" />
            </div>
            <div>
              <h3 class="font-semibold text-lg text-white mb-1 text-left">{{ feature?.title }}</h3>
              <p class="text-neutral-400 text-sm text-left">{{ feature?.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
      <!-- Call to Action -->
      <div>
        <UButton
          class="font-medium px-8 shadow-lg"
          size="xl"
          variant="solid"
          label="Join Our Community"
          icon="i-heroicons-users"
          :to="communityLink"
          target="_blank" />
      </div>
      <!-- Powered By -->
      <div class="mt-16">
        <p class="text-neutral-500 mb-3 text-sm">Powered by</p>
        <div class="flex justify-center space-x-5">
          <UIcon
            class="text-2xl text-neutral-400"
            name="i-simple-icons-vuedotjs" />
          <UIcon
            class="text-2xl text-neutral-400"
            name="i-simple-icons-tailwindcss" />
          <UIcon
            class="text-2xl text-neutral-400"
            name="i-simple-icons-javascript" />
        </div>
      </div>
    </div>
  </UContainer>
</template>
