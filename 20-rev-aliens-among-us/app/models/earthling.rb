class Earthling < ActiveRecord::Base

    def self.filter_by_job(job_str)
        # self.all.select {|earthling| earthling.job == job_str} # vanilla Ruby
        self.where(job: job_str) # using AR methods
    end

    has_many :visitations
    has_many :aliens, through: :visitations

    def full_name
        "#{self.first_name} #{self.last_name}"
    end
end
