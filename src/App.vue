<template>
  <div>
    <i18n-host>
      <base-counter initial-count="4" class="mr-4">
        <metrics-display slot="metric"></metrics-display>
        <control-panel slot="control"></control-panel>
      </base-counter>
      <base-counter>
        <metrics-display slot="metric"></metrics-display>
        <control-panel slot="control"></control-panel>
      </base-counter>
      <hr class="my-5" />
      <locale-picker />
    </i18n-host>
  </div>
</template>
