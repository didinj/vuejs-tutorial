<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Team Details
      </h2>
      <b-jumbotron bg-variant="white">
        <template slot="header">
          {{team.name}}
        </template>
        <template slot="lead">
          <b-img :src="require('../assets/img/' + team.image)" fluid alt="Responsive image"></b-img><br>
          City: {{team.location}}<br>
          Stadium: {{team.stadium}}<br>
          Stadium Capacity: {{team.capacity}}<br>
          Manager: {{team.manager}}<br>
          Captain: {{team.captain}}<br>
        </template>
        <hr class="my-4">
        <b-btn block class="maps-btn" variant="success" @click.stop="showMaps(team.lat, team.lng)">Show Maps</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import router from '../router'
import { Team } from '../Team'

export default {
  name: 'Details',
  data () {
    return {
      key: '',
      teams: Team,
      team: {}
    }
  },
  created () {
    const id = parseInt(this.$route.params.id, 0)
    this.team = this.teams.find(x => x.id === id)
  },
  methods: {
    showMaps (lat, lng) {
      router.push({
        name: 'Maps',
        params: { lat: lat, lng: lng }
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .maps-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>