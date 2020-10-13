<style src="./Filterbar.scss" module lang="scss"></style>
<script src="./Filterbar.js"></script>

<template>
  <div :class="[$style.filterbar]">
    <h3 :class="$style.title">Select your political
      <button class="uk-button uk-button-default" type="button" v-text="selectedFilter">Party/ leader</button>
      <div uk-dropdown>
        <ul class="uk-nav uk-dropdown-nav">
          <li :class="[{['uk-active uk-disabled']: selectedFilter === 'Party'}]"><a @click="selectPreState('party')">Party</a>
          </li>
          <li class="uk-nav-divider"></li>
          <li :class="[{['uk-active uk-disabled']: selectedFilter === 'Leader'}]"><a @click="selectPreState('leader')">Leader</a>
          </li>
        </ul>
      </div>
    </h3>
    <ul :class="[$style.filters, ' uk-tab']">
      <li :class="[$style.filter, 'nav-item', {['uk-active']: currentIndex === -1}]" ref="filterAll">
        <a @click="handleTabSwitch(-1, -1)">None</a>
      </li>

      <li :class="[$style.filter, 'nav-item', {['uk-active']: currentIndex === index}]"
          v-for="(party, index) in parties" :key="index" ref="filterParty">
        <a @click="handleTabSwitch(party.Id, index)">{{party.Acronym}}</a>
      </li>
    </ul>

    <button :class="['uk-button uk-button-default uk-align-center']" uk-toggle="target: #my-id" type="button"
            v-show="currentIndex > -1">Party/leader information
    </button>


    <div :class="[$style.sliderWrapper]" v-show="currentIndex > -1">
      <h3 :class="$style.title">Filter on sentiment:</h3>
      <button :class="['uk-button uk-button-default']" @click="selectSentiment(0)">All tweets</button>
      <button :class="[$style.negativeButton, 'uk-button uk-button-primary']" @click="selectSentiment(1)">Negative
        tweets
      </button>
      <button :class="[$style.neutralButton, 'uk-button uk-button-secondary']" @click="selectSentiment(2)">Neutral
        tweets
      </button>
      <button :class="[$style.positiveButton, 'uk-button uk-button-danger']" @click="selectSentiment(3)">Positive
        tweets
      </button>
    </div>

    <div id="my-id" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <!--        <h3 :class="[$style.title, 'uk-modal-title']">Detail information</h3>-->
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <h4 :class="[$style.subTitle]">{{currentParty.Name}}</h4>
            <table class="uk-table">
              <tbody>
              <tr>
                <td>Ideology</td>
                <td>{{currentParty.Ideologie}}</td>
              </tr>
              <tr>
                <td>Political movemement</td>
                <td>{{currentParty.PoliticalMovement}}</td>
              </tr>
              <tr>
                <td>Date founded</td>
                <td>{{currentParty.YearFounded}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 :class="[$style.subTitle]">{{analysis.leaderInfo.Name}}</h4>
            <table class="uk-table">
              <tbody>
              <tr>
                <td>Gender</td>
                <td>{{analysis.leaderInfo.Gender}}</td>
              </tr>
              <tr>
                <td>Date of birth</td>
                <td>{{analysis.leaderInfo.BirthYear}}</td>
              </tr>
              <tr>
                <td>Party</td>
                <td>{{analysis.leaderInfo.Party}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br><br>
        <div class="uk-section">
          <h3 :class="[$style.title]">Sentiment about <span v-if="selectedFilter === 'leader'">{{analysis.leaderInfo.Name}}</span> <span v-if="selectedFilter === 'party'">{{currentParty.Name}}</span></h3>
          <table class="uk-table">
            <tbody>
            <tr>
              <td>Negative Tweets</td>
              <td>{{analysis.negative}}</td>
            </tr>
            <tr>
              <td>Neutral Tweets</td>
              <td>{{analysis.neutral}}</td>
            </tr>
            <tr>
              <td>Positive Tweets</td>
              <td>{{analysis.positive}}</td>
            </tr>
            <tr>
              <td>Average Sentiment score</td>
              <td>{{analysis.avgSentiment}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
