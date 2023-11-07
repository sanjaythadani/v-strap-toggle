<template>
    <div>
        <label class="vs-checkbox no-margin" :class="classList">
            <input type="checkbox" autocomplete="off" />
            <span class="vs-checkbox-background"><span class="vs-checkbox-checkmark"></span></span>
            <span class="vs-checkbox-text">Label Text</span>
        </label>
    </div>
</template>

<script>
export default {
    props: ['classList']
};
</script>