module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      less: {
        files: ["css/**/*.less"],
        tasks: ["less"]
      }
    },
    less: {
      compile: {
        files: {
          "css/theme/never-been-so-much-fun.css": "css/theme/never-been-so-much-fun.less"
        },
        options: {
          compress: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 1338
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["less"]);
  grunt.registerTask("run", ["less", "connect", "watch"]);
};
