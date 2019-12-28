<template>
  <b-row>
    <b-col cols="12">
      <h2>
        English Premier League
      </h2>
      <b-table striped hover :items="teams" :fields="fields" @row-clicked="details"></b-table>
    </b-col>
  </b-row>
</template>

<script>

import router from '../router'
import { Team } from '../Team'

export default {
  name: 'List',
  data () {
    return {
      fields: [
          { key: 'id' },
          { key: 'name', label: 'Team Name', class: 'text-left', thClass: 'text-center' },
          { key: 'location', label: 'City', class: 'text-left', thClass: 'text-center' },
          { }
      ],
      teams: Team,
      errors: [],
    }
  },
  created () {
    this.teams = Team
  },
  methods: {
    details (team) {
      router.push({ name: 'Details', params: { id: team.id }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>