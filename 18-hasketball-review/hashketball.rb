require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 11,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {
          player_name: "Bismack Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slam_dunks: 10
        },
        {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {
          player_name: "Kemba Walker",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 7,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

# helper methods
def all_players
  game_hash[:home][:players] + game_hash[:away][:players]
end

def player_stats(player_name)
  all_players.find {|player_hash| player_hash[:player_name] == player_name}
end

def find_team(team_name)
  game_hash.find {|key, team_data| 
    team_data[:team_name] == team_name
  }[1]
end

# required methods
def num_points_scored(player_name)
  player_stats(player_name)[:points]
end

def shoe_size(player_name)
  player_stats(player_name)[:shoe]
end

def team_colors(team_name)
  find_team(team_name)[:colors]
end

def team_names
  game_hash.map {|_, team_data| team_data[:team_name]}
end

def player_numbers(team_name)
  # team = find_team(team_name)
  # team[:players].map {|player| player[:number]}
  find_team(team_name)[:players].map {|player| player[:number]}
end

def big_shoe_player
  all_players.max_by {|player| player[:shoe]}
end

def big_shoe_rebounds
  big_shoe_player[:rebounds]
end

# BONUS

def most_points_scored
  all_players.max_by {|player| player[:points]}[:player_name]
end

def winning_team
  # iterate the game hash, sum the points of each team, store sum in new hash with team name
  totals = game_hash.map {|location, team_data| {team_name: team_data[:team_name], total_points: team_data[:players].sum {|player| player[:points]}}}
  # binding.pry
  # call max on array with new hashes
  totals.max_by {|team| team[:total_points]}
end

def player_with_longest_name
  all_players.max_by {|player| player[:player_name].length}
end

# binding.pry
0